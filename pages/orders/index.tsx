import React from 'react'
import { data } from '../../data'
import Subheader from '@/components/header/Subheader'
import OrderItem from '@/components/orders/OrderItem'
import { IOrder } from '@/types/IOrder'

export interface IOrderProps {
  orders: IOrder[]
}

const OrdersPage = ({ orders }: IOrderProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Subheader title="Orders Page" />
      <div className="mx-4">
        <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-b-lg">
          <div className="grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer sm:grid-cols-3 md:grid-cols-4">
            <span>Orders</span>
            <span className="text-right sm:text-left">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidded sm:grid">Method</span>
          </div>
          <ul>
            {(orders || []).map((order, id) => (
              <OrderItem key={id} order={order} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage

export async function getServerSideProps() {
  return {
    props: {
      orders: await (await import('../../data')).data,
    },
  }
}
