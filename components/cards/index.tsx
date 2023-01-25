import React from 'react'
import TopCard from './TopCard'

export interface ITopCard {
  amount: number
  title: string
  percentage: string
  className?: string
}

const topCards: ITopCard[] = [
  {
    amount: 7846,
    title: 'Daily Revenue',
    percentage: '+18%',
    className: 'lg:col-span-2',
  },
  {
    amount: 1437876,
    title: 'YTD Revenue',
    percentage: '+11%',
    className: 'lg:col-span-2',
  },
  { amount: 11437, title: 'Customers', percentage: '+17%' },
]

export const TopCards = () => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      {(topCards || []).map((item, index) => {
        return <TopCard {...item} key={index} />
      })}
    </div>
  )
}
