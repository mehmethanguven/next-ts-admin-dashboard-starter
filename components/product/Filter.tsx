import { IProduct } from '@/types/IProduct'
import { Rating } from 'react-simple-star-rating'

export function filterProducts(products: IProduct[], rate: number) {
  return products.filter((product: IProduct) => product.rating.rate > rate)
}

interface IFilterProps {
  filterRate: number
  handleRating: (rate: number) => void
}

export const Filter = (props: IFilterProps) => {
  const { filterRate, handleRating } = props

  return (
    <div className="mx-4 mb-4 flex flex-col items-center justify-center rounded-lg bg-white p-4">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
  )
}
