interface FlowchartDiagramProps {
  size?: number
  className?: string
  colors?: {
    primary?: string
    documentation?: string
    learning?: string
    communication?: string
    text?: string
    icons?: string
  }
  showLabels?: boolean
  animate?: boolean
}

export default function FlowchartDiagram({
  size = 400,
  className = "",
  colors = {
    primary: "#9CA3AF",
    documentation: "#f48c04",
    learning: "#0894b4",
    communication: "#f48c04",
    text: "#374151",
    icons: "#374151",
  },
  showLabels = true,
  animate = false,
}: FlowchartDiagramProps) {
  const viewBoxSize = 800
  const scale = size / viewBoxSize

  return (
    <div className={`inline-block w-full h-full ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Definitions for arrowheads */}
        <defs>
          <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.documentation} />
          </marker>
          <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.learning} />
          </marker>
          <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.communication} />
          </marker>
        </defs>

        {/* Central Avatar Circle */}
        <circle
          cx="100"
          cy="400"
          r="60"
          fill="none"
          stroke={colors.primary}
          strokeWidth="3"
          className={animate ? "animate-pulse" : ""}
        />

        {/* Avatar Face */}
        <g transform="translate(100, 400)">
          {/* Face outline */}
          <circle cx="0" cy="-10" r="25" fill="none" stroke={colors.primary} strokeWidth="2" />
          {/* Eyes */}
          <circle cx="-8" cy="-15" r="2" fill={colors.primary} />
          <circle cx="8" cy="-15" r="2" fill={colors.primary} />
          {/* Mouth */}
          <path d="M -10,-5 Q 0,5 10,-5" fill="none" stroke={colors.primary} strokeWidth="2" />
          {/* Tongue */}
          {/* <ellipse cx="0" cy="0" rx="6" ry="3" fill="none" stroke={colors.primary} strokeWidth="1.5" /> */}
        </g>

        {/* Blue Arrow to Documentation */}
        <path
          d="M 160 350 Q 300 250 450 200"
          fill="none"
          stroke={colors.documentation}
          strokeWidth="3"
          markerEnd="url(#arrowhead-blue)"
          className={animate ? "animate-pulse" : ""}
          style={{ animationDelay: animate ? "0.5s" : undefined }}
        />

        {/* Yellow Arrow to Learning */}
        <path
          d="M 160 400 L 450 400"
          fill="none"
          stroke={colors.learning}
          strokeWidth="3"
          markerEnd="url(#arrowhead-yellow)"
          className={animate ? "animate-pulse" : ""}
          style={{ animationDelay: animate ? "1s" : undefined }}
        />

        {/* Green Arrow to Communication */}
        <path
          d="M 160 450 Q 300 550 450 600"
          fill="none"
          stroke={colors.communication}
          strokeWidth="3"
          markerEnd="url(#arrowhead-green)"
          className={animate ? "animate-pulse" : ""}
          style={{ animationDelay: animate ? "1.5s" : undefined }}
        />

        {/* Documentation Icon */}
        <g transform="translate(480, 200)">
          <rect x="-15" y="-20" width="30" height="35" rx="2" fill="none" stroke={colors.icons} strokeWidth="2" />
          <path
            d="M -10,-10 L 5,-10 M -10,-5 L 10,-5 M -10,0 L 10,0 M -10,5 L 5,5"
            stroke={colors.icons}
            strokeWidth="1"
          />
          <path d="M 8,-20 L 8,-12 L 15,-12" fill="none" stroke={colors.icons} strokeWidth="2" />
        </g>

        {/* Learning Icon (Lightbulb + Person) */}
        <g transform="translate(480, 400)">
          {/* Lightbulb */}
          <circle cx="-5" cy="-15" r="8" fill="none" stroke={colors.icons} strokeWidth="2" />
          <rect x="-8" y="-5" width="6" height="4" fill="none" stroke={colors.icons} strokeWidth="1" />
          <line x1="-5" y1="-25" x2="-5" y2="-30" stroke={colors.icons} strokeWidth="2" />
          <line x1="-12" y1="-22" x2="-15" y2="-25" stroke={colors.icons} strokeWidth="2" />
          <line x1="2" y1="-22" x2="5" y2="-25" stroke={colors.icons} strokeWidth="2" />
          {/* Person */}
          <circle cx="8" cy="-10" r="6" fill="none" stroke={colors.icons} strokeWidth="2" />
          <path d="M 2,0 L 2,15 M 14,0 L 14,15 M 2,8 L 14,8" stroke={colors.icons} strokeWidth="2" />
        </g>

        {/* Communication Icon (Handshake) */}
        <g transform="translate(480, 600)">
          <path
            d="M -15,-5 Q -10,-10 -5,-5 L 5,-5 Q 10,-10 15,-5 Q 10,0 5,5 L -5,5 Q -10,0 -15,-5"
            fill="none"
            stroke={colors.icons}
            strokeWidth="2"
          />
          <circle cx="-10" cy="-8" r="3" fill="none" stroke={colors.icons} strokeWidth="1.5" />
          <circle cx="10" cy="-8" r="3" fill="none" stroke={colors.icons} strokeWidth="1.5" />
        </g>

        {/* Labels */}
        {showLabels && (
          <>
            {/* Smart Documentation */}
            <text x="550" y="190" fill={colors.documentation} fontSize="24" fontWeight="bold" className="font-sans">
              Smart Documentation
            </text>
            <text x="550" y="210" fill={colors.text} fontSize="16" className="font-sans">
              Ensures clarity and efficiency in processes
            </text>

            {/* Effective Learning */}
            <text x="550" y="390" fill={colors.learning} fontSize="24" fontWeight="bold" className="font-sans">
              Effective Learning
            </text>
            <text x="550" y="410" fill={colors.text} fontSize="16" className="font-sans">
              Enhances skills and knowledge for better
            </text>
            <text x="550" y="430" fill={colors.text} fontSize="16" className="font-sans">
              performance
            </text>

            {/* Confident Communication */}
            <text x="550" y="590" fill={colors.communication} fontSize="24" fontWeight="bold" className="font-sans">
              Confident Communication
            </text>
            <text x="550" y="610" fill={colors.text} fontSize="16" className="font-sans">
              Fosters strong relationships and clear
            </text>
            <text x="550" y="630" fill={colors.text} fontSize="16" className="font-sans">
              understanding
            </text>
          </>
        )}
      </svg>
    </div>
  )
}