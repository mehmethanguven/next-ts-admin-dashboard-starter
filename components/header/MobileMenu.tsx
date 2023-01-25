import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../sidebar/Sidebar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  open: boolean
  setOpen: () => void
}

export default function MobileMenu({ open, setOpen }: Props) {
  const router = useRouter()
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="shadow absolute right-0 top-full w-full rounded-lg border bg-white sm:hidden"
        >
          <ul className="flex flex-col divide-y divide-gray-100 text-center ">
            {(navLinks || []).map(({ title, url }, i) => (
              <Link key={i} href={url} onClick={setOpen}>
                <li
                  className={clsx(
                    'flex w-40 cursor-pointer items-center justify-start gap-2 rounded-lg p-4 hover:bg-purple-100 hover:p-4 hover:font-bold',
                    {
                      'font-bold': router.asPath === url,
                    }
                  )}
                >
                  {title}
                </li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
