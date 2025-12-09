export default function PlayerResource() {
  return (
    <div>
      <div className="border border-[#363736] p-2 rounded rounded-b-none mt-5 uppercase font-semibold">
        player resources
      </div>
      <div>
        <div className="flex border border-[#363736] rounded rounded-b-none rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            In-depth Frame Data
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://fullmeter.com/fatonline/#/framedata/SF6/Ryu"
            >
              Frame Data Assistant (FAT)
            </a>
          </div>
        </div>
        <div className="flex border border-[#363736]  rounded rounded-t-none">
          <div className="w-50 p-2 border border-b-0 border-t-0 border-l-0 border-[#363736]">
            Combo Database
          </div>
          <div className="p-2">
            <a
              className="text-blue-500 text-fg-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://vscombos.com/SFVI/sfvi.php"
            >
              Street Fighter 6 Combo Finder
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
