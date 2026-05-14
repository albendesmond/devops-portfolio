'use client'

// components/layout/NavLinks.tsx
// Renders the list of nav links.
// Used in both the desktop row and the mobile dropdown.

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '../lib/Navlinks'


interface NavLinksProps {
  /** Layout direction — row for desktop, column for mobile */
  direction?: 'row' | 'col'
  /** Called when any link is clicked (used to close mobile menu) */
  onLinkClick?: () => void
}

export default function NavLinks({
  direction = 'row',
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    // Exact match for pages, prefix match for hash links on home
    if (href.startsWith('/#')) return pathname === '/'
    return pathname === href
  }

  return (
    <ul
      className={`
        flex gap-1
        ${direction === 'col' ? 'flex-col' : 'flex-row items-center'}
      `}
    >
      {navLinks.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={onLinkClick}
            className={`
              relative px-3 py-2 rounded-md
              font-body text-sm font-medium
              transition-colors duration-200
              group

              /* Active state */
              ${isActive(href)
                ? 'text-teal'
                : 'text-muted hover:text-text'
              }
            `}
          >
            {/* Teal underline indicator — animates in on hover and active */}
            <span
              className={`
                absolute bottom-0 left-3 right-3 h-[2px] rounded-full
                bg-teal
                transition-transform duration-200 origin-left
                ${isActive(href)
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
                }
              `}
            />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}