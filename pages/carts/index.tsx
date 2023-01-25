import Subheader from '@/components/header/Subheader'
import { Button } from '@/components/Button'
import { BsPersonFill, BsPencil } from 'react-icons/bs'
import { useCarts } from '@/hooks/useCarts'
import Loader from '@/components/Loader'

const CartsPage = () => {
  const { carts } = useCarts()

  return (
    <div className="flex h-full flex-col">
      <Subheader title="Carts page" />
      <div className="flex h-full flex-col flex-wrap justify-center ">
        <div className="mx-4">
          <div className="m-auto w-full overflow-y-auto rounded-b-lg bg-white p-4">
            <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-6">
              <span>User ID</span>
              <span className="text-right sm:text-left">Product Title</span>
              <span className="text-right sm:text-left">Total Products</span>
              <span className="hidden md:grid">Total Quantity</span>
              <span className="hidden md:grid">Discounted Total</span>
              <span className="hidden md:grid">Total</span>
            </div>
            {carts && carts.length > 0 ? (
              <ul>
                {(carts || []).map((cart, id) => (
                  <li
                    key={id}
                    className="my-3 grid cursor-pointer grid-cols-2 items-center justify-center bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-6"
                  >
                    <div className="flex items-center">
                      <div className="rounded-lg bg-purple-100 p-3">
                        <BsPersonFill className="text-purple-800" />
                      </div>
                      <p className="pl-4">{cart.userId}</p>
                    </div>
                    <p className="mr-2 p-2 text-right text-gray-600 sm:text-left">
                      {cart.products[0].title}
                    </p>
                    <p className="text-right text-gray-600 sm:text-left">
                      {cart.totalProducts}
                    </p>
                    <p className="hidden md:block">{cart.totalQuantity}</p>
                    <p className="hidden md:block">{cart.discountedTotal}</p>
                    <div className="hidden items-center justify-between sm:flex">
                      <p>{cart.total}</p>
                      <Button
                        className="rounded-lg bg-purple-500 text-white hover:bg-purple-700 hover:text-white"
                        onClick={() => alert('Edit')}
                      >
                        <BsPencil />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartsPage
