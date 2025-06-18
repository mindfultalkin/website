import FlowchartDiagram from "./flowchart-diagram"

export function FlowchartVariants() {
  return (
    <div className="space-y-8 flex justify-center items-center">

      {/* Default */}
      <div className="space-y-4">
        <div className="aspect-square w-[350px] sm:w-[550px] md:w-[750px] lg:w-[950px] mx-auto">
          <FlowchartDiagram 
            size={undefined} 
            className="" 
          />
        </div>
      </div>

      {/* Custom Colors */}
      
    </div>
  )
}