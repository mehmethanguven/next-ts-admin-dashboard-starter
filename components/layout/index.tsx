import React, { ReactNode } from 'react'
import Header from '../header'
import Sidebar from '../sidebar/Sidebar'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex gap-5 bg-gray-100">
      <div className="hidden w-44 md:block">
        <Sidebar />
      </div>
      <div className="w-full">
        <Header title="Merkezsoft" />
        <main className="bg-gray-100">{children}</main>
      </div>
    </div>
  )
}

export default Layout
