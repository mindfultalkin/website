// app/api/subscribe/route.ts

import { NextRequest, NextResponse } from 'next/server'

/**
 * Exchange Zoho refresh token for an access token
 */
async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
    client_id:     process.env.ZOHO_CLIENT_ID!,
    client_secret: process.env.ZOHO_CLIENT_SECRET!,
    grant_type:    'refresh_token',
  })

  const resp = await fetch(`https://accounts.zoho.in/oauth/v2/token?${params}`, {
    method: 'POST',
  })

  if (!resp.ok) {
    const err = await resp.json()
    console.error('Zoho token error:', err)
    throw new Error('Failed to refresh Zoho access token')
  }

  const data = await resp.json()
  return data.access_token
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    // 1) Get a fresh Zoho access token
    const accessToken = await getAccessToken()

    // 2) Build the payload for the Leads module
    const payload = {
      data: [
        {
          Last_Name: 'Subscriber',
          Email: email,
        },
      ],
    }

    // 3) Send to Zoho CRM
    const crmUrl = `https://www.zohoapis.in/crm/v2/Leads?organization_id=${process.env.ZOHO_ORG_ID}`
    const crmResp = await fetch(crmUrl, {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const crmJson = await crmResp.json()
    if (!crmResp.ok) {
      console.error('Zoho CRM error:', crmJson)
      return NextResponse.json({ error: crmJson }, { status: crmResp.status })
    }

    // 4) Success
    return NextResponse.json({ success: true, data: crmJson })
  } catch (err: any) {
    console.error('Subscription error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
