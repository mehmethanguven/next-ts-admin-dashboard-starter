import React from 'react'
import { TopCards } from '@/components/cards'
import Charts from '@/components/charts'
import RecentOrders from '@/components/RecentOrders'

const Home = () => {
  return (
    <div>
      <TopCards />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        <Charts />
        <RecentOrders />
      </div>
    </div>
  )
}

export default Home
