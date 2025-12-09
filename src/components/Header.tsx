import React from 'react'
import logo from '@/images/logo/image.png'

type NavItem = {
  label: string
  href: string
  external?: boolean
}

type HeaderProps = {
  logo?: React.ReactNode
  navItems?: Array<NavItem>
}

export default function Header({
  navItems = [
    { label: 'Home', href: '/home' },
    { label: 'Dashboard', href: '/dashboard' },
  ],
}: HeaderProps) {
  return (
    <header className="bg-black font-bold">
      <div className="flex items-center justify-start gap-5 list-none">
        <img className="w-20" draggable={false} src={logo} />
        <button aria-label="Home"></button>
        {navItems.map((item) => (
          <li key={item.href} role="none" className="hover:text-gray-300">
            <a
              href={item.href}
              role="menuitem"
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </div>
    </header>
  )
}
