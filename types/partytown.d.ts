declare module '@builder.io/partytown/react' {
  export interface PartytownConfig {
    debug?: boolean
    forward?: string[]
  }

  export function Partytown(props: { forward?: string[] }): JSX.Element
}
