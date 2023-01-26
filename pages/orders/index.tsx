import React from 'react'
import Subheader from '@/components/header/Subheader'
import OrderItem from '@/components/orders/OrderItem'
import { IOrder } from '@/types/IOrder'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const OrdersPage = ({
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Subheader title="Orders Page" />
      <div className="mx-4">
        <div className="m-auto w-full overflow-y-auto rounded-b-lg bg-white p-4">
          <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4">
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

export const getServerSideProps: GetServerSideProps<{
  orders: IOrder[]
}> = async () => {
  const orders = await (await import('../../data')).data
  return {
    props: {
      orders,
    },
  }
}
