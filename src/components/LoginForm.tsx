import { Link } from '@tanstack/react-router'

interface LoginFormProps {
  className?: string
}

export default function LoginForm({ className = '' }: LoginFormProps) {
  return (
    <div className={`p-4 rounded ${className}`}>
      <form>
        Email
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
        />
        Password
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          className="mb-4 p-2 rounded w-full border border-gray-300 bg-[#161616] text-white"
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-[#161616] text-white py-2 rounded border border-gray-300 cursor-pointer hover:bg-[#1a1a1a]"
        >
          Login
        </button>
      </form>
      <div className="mt-2 text-sm text-white-500 cursor-pointer hover:underline">
        Forgot Password?
      </div>
      <div className="mt-2 text-sm text-white-500 cursor-pointer hover:underline">
        <Link to="/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  )
}
