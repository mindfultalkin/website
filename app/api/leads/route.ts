// app/api/leads/route.ts

import { NextRequest, NextResponse } from "next/server"

/** Exchange your Zoho refresh token for a fresh access token */
async function getAccessToken(): Promise<string> {
    const params = new URLSearchParams({
        refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
        client_id: process.env.ZOHO_CLIENT_ID!,
        client_secret: process.env.ZOHO_CLIENT_SECRET!,
        grant_type: "refresh_token",
    })

    const resp = await fetch(`https://accounts.zoho.in/oauth/v2/token?${params}`, {
        method: "POST",
    })
    if (!resp.ok) {
        console.error("Zoho token error", await resp.text())
        throw new Error("Could not refresh Zoho access token")
    }
    const { access_token } = await resp.json()
    return access_token
}

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, niche } = await req.json()
        if (!name || !email || !niche) {
            return NextResponse.json(
                { error: "Name, email, and niche are required." },
                { status: 400 }
            )
        }

        const accessToken = await getAccessToken()

        // Map fields into Zoho Lead
        const payload = {
            data: [
                {
                    Last_Name: name,
                    Email: email,
                    Phone: phone,
                    Description: niche,
                },
            ],
        }

        const crmRes = await fetch(
            `https://www.zohoapis.in/crm/v2/Leads?organization_id=${process.env.ZOHO_ORG_ID}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Zoho-oauthtoken ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        )
        const crmJson = await crmRes.json()
        if (!crmRes.ok) {
            console.error("Zoho CRM error", crmJson)
            return NextResponse.json({ error: crmJson }, { status: crmRes.status })
        }

        return NextResponse.json({ success: true, data: crmJson })
    } catch (err: any) {
        console.error("Lead-creation error:", err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}
