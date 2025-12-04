import {  createFileRoute, redirect } from '@tanstack/react-router'
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
        <div className="border border-[#363736] p-5 rounded mb-5 uppercase font-semibold">
          Current roster
        </div>
        <CharacterGrid characters={characterImg} />
      </div>
    </div>
  )
}
