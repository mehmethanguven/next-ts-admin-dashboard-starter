import clsx from 'clsx'
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'

type Props = {
  title: string
  className?: string
}

const Header = ({ title, className }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={clsx(
        'sticky top-0 z-20 m-4 flex justify-between gap-1 rounded-lg bg-white p-4 shadow-sm',
        className
      )}
    >
      <h2 data-testid="dashboard" className="text-xl font-bold">
        {title}
      </h2>
      <h2 className="hidden md:block">Hello Mehmethan</h2>
      {/* Menu Icon */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      <MobileMenu open={open} setOpen={() => setOpen(false)} />
    </div>
  )
}

export default Header
