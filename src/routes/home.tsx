import { createFileRoute, redirect } from '@tanstack/react-router'
import CharacterGrid from '@/components/CharacterGrid'
import Logout from '@/components/Logout'
import { characterImg } from '@/data/characterImg'
import { fetchNewsForApp } from '@/services/steam.api'

export const Route = createFileRoute('/home')({
  beforeLoad: async ({ context }) => {
    if (!context.authState.isAuthenticated) {
      throw redirect({ to: '/' })
    }
  },
  component: RouteComponent,
  // loader: async () => {
  //   try {
  //     const data = await fetchNewsForApp()
  //     return data
  //   } catch (error) {
  //     console.error('Error fetching news: ', error)
  //     return { error: 'failed to load news' }
  //   }
  // },
})

function RouteComponent() {
  // const data = Route.useLoaderData()
  // console.log(data)
  return (
    <div className="min-h-[calc(100vh-114px)] ">
      <header className="max-w-5xl p-10 mx-auto">
        <div className="border border-[#363736] rounded p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-lg mb-1">
            Select a character to start tracking your own tech
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <CharacterGrid characters={characterImg} />
          <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-96 border border-[#363736] rounded">
            <Logout />
          </div>
        </div>
      </header>
    </div>
  )
}
