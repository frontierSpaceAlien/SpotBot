import { createFileRoute, redirect } from '@tanstack/react-router'
import { characterImg } from '@/data/characterImg'
import CharacterGrid from '@/components/CharacterGrid'
import LoginForm from '@/components/SignInForm'

export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
    if (context.authState.isAuthenticated) {
      throw redirect({ to: '/home' })
    }
  },
  component: App,
})

function App() {
  return (
    <div className="min-h-[calc(100vh-114px)] ">
      <header className="max-w-5xl p-10 mx-auto">
        <div className="border border-[#363736] rounded p-6">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to SF Tech Tracker!
          </h1>
          <p className="text-lg mb-1">
            Keeps track of character tech for learning!
          </p>
          <p className="font-bold">Login to track your tech.</p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row">
          <CharacterGrid characters={characterImg} />
          <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-96 border border-[#363736] rounded">
            <LoginForm />
          </div>
        </div>
      </header>
    </div>
  )
}
