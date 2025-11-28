interface TechBoxProps {
  boxTitle?: string
}

export default function TechBox({ boxTitle }: TechBoxProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#161616] p-5 border border-gray-400 rounded">
        <div>
          <p className="text-white font-semibold uppercase text-lg">
            {boxTitle}
          </p>
        </div>
      </div>
      <div className="bg-[#161616] p-5 max-h-1/2 h-64 border border-gray-400 rounded ">
        <p className="text-gray-300">
          This is where tech information will be displayed.
        </p>
      </div>
    </div>
  )
}
