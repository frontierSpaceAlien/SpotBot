export default function FormButtons() {
  return (
    <div className="h-30 bg-blue-400">
      <label>Normals</label>
      <div className="flex flex-wrap gap-2">
        <button id="5lp" className="border border-gray-300 p-3 text-cyan-300">
          5LP
        </button>
        <button
          id="5mp"
          className="border p-3 border border-gray-300 p-3 text-yellow-300"
        >
          5MP
        </button>
        <button
          id="5hp"
          className="border p-3 border border-gray-300 p-3 text-red-400"
        >
          5HP
        </button>
        <button
          id="5lk"
          className="border p-3 border border-gray-300 p-3 text-cyan-300"
        >
          5LK
        </button>
        <button
          id="5mk"
          className="border p-3 border border-gray-300 p-3 text-yellow-300"
        >
          5MK
        </button>
        <button
          id="5hk"
          className="border p-3 border border-gray-300 p-3 text-red-400"
        >
          5HK
        </button>
      </div>
    </div>
  )
}
