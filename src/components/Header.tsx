import React, { useEffect, useState } from 'react'

type NavItem = {
  label: string
  href: string
  external?: boolean
}

type HeaderProps = {
  title?: string
  logo?: React.ReactNode
  navItems?: Array<NavItem>
  className?: string
  onLogoClick?: () => void
}

export default function Header({
  title = 'SF Tech Tracker',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/settings' },
  ],
  className,
  onLogoClick,
}: HeaderProps) {
  return (
    <header style={styles.header} className={className}>
      <div style={styles.inner}>
        <button
          onClick={onLogoClick}
          aria-label="Home"
          style={styles.brand}
          title={typeof title === 'string' ? title : undefined}
        >
          <span style={styles.title}>{title}</span>
        </button>
        {navItems.map((item) => (
          <li key={item.href} role="none" style={styles.navItem}>
            <a
              href={item.href}
              role="menuitem"
              style={styles.link}
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

const styles: Record<string, React.CSSProperties> = {
  header: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    background: '#202020ff',
    position: 'sticky',
    top: 0,
    zIndex: 40,
    color: 'white',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 ',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    gap: 12,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    background: 'transparent',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: 16,
    fontWeight: 600,
  },
  title: {
    display: 'inline-block',
  },
  navItem: { listStyleType: 'none' },
  link: {
    display: 'inline-block',
    padding: '8px 10px',
    color: 'inherit',
    textDecoration: 'none',
    borderRadius: 6,
    fontSize: 14,
  },
}
