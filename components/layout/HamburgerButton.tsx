'use client'

// components/layout/HamburgerButton.tsx
// Animated hamburger → X toggle button for mobile nav.

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
      className="
        md:hidden
        flex flex-col justify-center items-center
        w-10 h-10 gap-[5px]
        rounded-md border border-border
        hover:border-teal transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-teal
      "
    >
      {/* Three bars that animate into an X */}
      <span
        className={`
          block h-[2px] w-5 bg-text rounded-full
          transition-all duration-300 origin-center
          ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}
        `}
      />
      <span
        className={`
          block h-[2px] w-5 bg-text rounded-full
          transition-all duration-300
          ${isOpen ? 'opacity-0 scale-x-0' : ''}
        `}
      />
      <span
        className={`
          block h-[2px] w-5 bg-text rounded-full
          transition-all duration-300 origin-center
          ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}
        `}
      />
    </button>
  )
}