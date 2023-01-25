import clsx from 'clsx'
import React from 'react'
import { NumericFormat } from 'react-number-format'
import { ITopCard } from '.'

function TopCard({ amount, title, percentage, className }: ITopCard) {
  return (
    <div
      className={clsx(
        'col-span-1 flex w-full justify-between rounded-lg border bg-white p-4',
        className
      )}
    >
      <div className="flex w-full flex-col pb-4">
        <p className="text-2xl font-bold">
          $
          <NumericFormat
            value={amount}
            thousandSeparator={true}
            displayType="text"
          />
        </p>
        <p className="text-gray-600">{title}</p>
      </div>
      <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
        <span className="text-lg text-green-700">{percentage}</span>
      </p>
    </div>
  )
}

export default TopCard
