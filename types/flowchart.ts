export interface FlowchartColors {
  primary?: string
  documentation?: string
  learning?: string
  communication?: string
  text?: string
  icons?: string
}

export interface FlowchartDiagramProps {
  size?: number
  className?: string
  colors?: FlowchartColors
  showLabels?: boolean
  animate?: boolean
}