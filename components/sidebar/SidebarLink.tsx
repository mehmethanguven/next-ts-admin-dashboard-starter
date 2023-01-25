import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { INavLink } from './Sidebar'

export function SidebarLink({ title, url, icon }: INavLink): JSX.Element {
  const router = useRouter()
  return (
    <Link href={url}>
      <div
        className={clsx(
          'flex w-40 cursor-pointer items-center justify-start gap-2 rounded-lg p-4 hover:bg-purple-100 hover:p-4 hover:font-bold',
          {
            'font-bold': router.asPath === url,
          }
        )}
      >
        {icon} <h3>{title}</h3>
      </div>
    </Link>
  )
}
