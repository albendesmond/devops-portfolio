//Navigation menu

'use client'

// components/layout/Navbar.tsx
// Main navigation bar. Handles:
//   - Desktop horizontal layout
//   - Mobile hamburger toggle
//   - Sticky + blur on scroll
//   - Close menu on Escape key

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import NavLinks from './Navlinks'
import HamburgerButton from './HamburgerButton'

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  // ── Close on Escape key ──────────────────────────────────
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setIsOpen(false)
  }, [])

  // ── Detect scroll for elevated shadow ────────────────────
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleKeyDown, handleScroll])

  // ── Close menu when viewport hits md breakpoint ──────────
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false)
    }
    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className={`
        sticky top-0 z-50
        w-full
        bg-surface/90 backdrop-blur-lg
        border-b border-border
        transition-shadow duration-300
        ${scrolled ? 'shadow-lg shadow-black/30' : ''}
      `}
    >
      {/* ── Top bar ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Name */}
          <Link
            href="/"
            className="font-heading font-bold text-lg text-teal tracking-tight hover:opacity-80 transition-opacity"
          >
            {/* Replace with your name or logo */}
            Desmond<span className="text-gold">.</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLinks direction="row" />
          </nav>

          {/* Desktop CTA button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/desmond-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 rounded-md
                border border-teal text-teal
                font-body text-sm font-medium
                hover:bg-teal hover:text-bg
                transition-colors duration-200
              "
            >
              Get In Touch
            </a>
          </div>

          {/* Hamburger (mobile only) */}
          <HamburgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen(prev => !prev)}
          />

        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-5 pt-2 border-t border-border flex flex-col gap-4">

          {/* Mobile nav links */}
          <NavLinks
            direction="col"
            onLinkClick={() => setIsOpen(false)}
          />

          {/* Mobile CTA */}
          <a
            href="/get-in-touch"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              w-full text-center
              px-4 py-2 rounded-md
              border border-teal text-teal
              font-body text-sm font-medium
              hover:bg-teal hover:text-bg
              transition-colors duration-200
            "
          >
            Download CV
          </a>

        </div>
      </div>
    </header>
  )
}
