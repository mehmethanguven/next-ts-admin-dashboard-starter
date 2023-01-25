import { IProduct } from '@/types/IProduct'
import Image from 'next/image'
import Loader from '../Loader'

interface IProductProps {
  product: IProduct
}

export const Product = ({ product }: IProductProps) => {
  const { title, rating, image } = product

  if (!product)
    return (
      <div className="shadow-md m-2 flex w-56 max-w-sm flex-col items-center rounded-lg bg-white dark:border-gray-700 dark:bg-gray-800">
        <Loader />
      </div>
    )

  return (
    <div className="shadow-md m-2 flex w-56 max-w-sm flex-col items-center rounded-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <Image
          width={0}
          height={0}
          className="h-48 w-48 rounded-t-lg p-8"
          src={image}
          alt="product image"
          sizes="100vh"
        />
      </a>
      <div className="flex flex-col px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="mt-2.5 mb-5 flex flex-1 items-center">
          {Array(Math.trunc(rating.rate))
            .fill('')
            .map((_, idx) => (
              <svg
                key={idx}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}

          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {Math.trunc(rating.rate)}
          </span>
        </div>
      </div>
    </div>
  )
}
