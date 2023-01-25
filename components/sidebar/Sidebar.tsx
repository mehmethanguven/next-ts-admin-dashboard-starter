import React from 'react'
import { RxDashboard, RxPerson, RxCardStack } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { SidebarLink } from './SidebarLink'
export interface INavLink {
  icon: React.ReactNode
  url: string
  title?: string
}
export const navLinks: INavLink[] = [
  {
    icon: <RxDashboard size={20} />,
    url: '/',
    title: 'Dashboard',
  },
  {
    icon: <RxPerson size={20} />,
    url: '/products',
    title: 'Products',
  },
  {
    icon: <RxPerson size={20} />,
    url: '/users',
    title: 'Users',
  },

  {
    icon: <RxCardStack size={20} />,
    url: '/carts',
    title: 'Carts',
  },
  {
    icon: <HiOutlineShoppingBag size={20} />,
    url: '/orders',
    title: 'Orders',
  },
  {
    icon: <FiSettings size={20} />,
    url: '/settings',
    title: 'Settings',
  },
]
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="fixed my-3 flex h-screen w-44 flex-col justify-between rounded-lg border-r bg-white">
        <div className="mt-4 flex flex-col items-center justify-center">
          {(navLinks || []).map((item, index) => {
            return <SidebarLink {...item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
