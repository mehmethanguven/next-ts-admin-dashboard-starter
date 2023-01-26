import { IOrder } from '@/types/IOrder'
import clsx from 'clsx'
import React from 'react'
import { BsPencil } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { Button } from '../Button'

type Props = { order: IOrder }

const OrderItem = ({ order }: Props) => {
  return (
    <li className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4">
      <div className="flex">
        <div className="rounded-lg bg-purple-100 p-3">
          <FaShoppingBag className="text-purple-800" />
        </div>
        <div className="pl-4">
          <p className="font-bold text-gray-800">
            {order.total.toLocaleString()}
          </p>
          <p className="text-sm text-gray-800">{order.name.first}</p>
        </div>
      </div>{' '}
      <p className="text-right text-gray-600 sm:text-left">
        <span
          className={clsx(
            'rounded-lg p-2',
            order.status == 'Processing'
              ? 'bg-green-200'
              : order.status == 'Completed'
              ? 'bg-blue-200'
              : 'bg-yellow-200'
          )}
        >
          {order.status}
        </span>
      </p>
      <div className="hidden md:flex">{order.date}</div>
      <div className="hidden items-center justify-between sm:flex">
        <p>{order.method}</p>
        <Button
          className="rounded-lg bg-purple-500 text-white hover:bg-purple-700 hover:text-white"
          onClick={() => alert('Edit')}
        >
          <BsPencil />
        </Button>
      </div>
    </li>
  )
}

export default OrderItem
