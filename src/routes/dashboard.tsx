import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterGrid from '@/components/CharacterGrid'
import { characterImg } from '@/data/characterImg'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  return (
    <div className="max-w-2xl p-5 mx-auto min-h-[calc(100vh-114px)]">
      <h1 className="flex justify-center text-6xl mb-15 uppercase">
        Dashboard
      </h1>
      <div className="mx-auto max-w-7xl max-2xl:max-w-none max-2xl:mx-0 ">
        <div className="border border-[#363736] p-5 rounded rounded-b-none uppercase font-semibold">
          Current roster
        </div>
        <CharacterGrid characters={characterImg} />
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
                className="text-blue-500 text-fg-brand underline hover:no-underline"
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
                className="text-blue-500 text-fg-brand underline hover:no-underline"
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
    </div>
  )
}
