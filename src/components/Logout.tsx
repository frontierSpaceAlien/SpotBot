import { useQueryClient } from '@tanstack/react-query'
import { redirect, useRouter } from '@tanstack/react-router'
import { authQueries, useAuthenticatedUser } from '@/services/queries'
import { signOut } from '@/services/auth.api'
import { Link } from '@tanstack/react-router'

export default function Logout() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const {
    data: { user },
  } = useAuthenticatedUser()

  const handleLogout = async () => {
    await signOut()
    await queryClient.invalidateQueries(authQueries.user())
    router.invalidate()
    redirect({ to: '/' })
  }
  return (
    <div className="p-4 rounded">
      <p className="font-bold">Email:</p>
      <div className="">
        <label>{user.email}</label>
      </div>
      {/* <div className="font-bold mb-5">
        <p>Number of Tracked Characters: </p>
        add tracked characters here
      </div> */}
      <Link to="/dashboard">
        <button
          type="button"
          className="mt-5 w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer hover:bg-[#1a1a1a]"
        >
          Go To Dashboard
        </button>
      </Link>
      <button
        type="button"
        className="mt-5 w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer hover:bg-[#1a1a1a]"
        onClick={handleLogout}
      >
        Sign out
      </button>
    </div>
  )
}
