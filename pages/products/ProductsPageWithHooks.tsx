import { useProducts } from '@/hooks/useProducts'
import { useRateFilter } from '@/hooks/useRateFilter'
import Subheader from '@/components/header/Subheader'
import { Product, Filter, filterProducts } from '@/components/product'
import Loader from '@/components/Loader'
import { IProduct } from '@/types/IProduct'

const ProductsPageWithHooks = () => {
  const { products } = useProducts()
  const { filterRate, handleRating } = useRateFilter()

  return (
    <div className="flex h-full min-h-screen flex-col">
      <Subheader title="Products Card Page" />
      <Filter filterRate={filterRate as number} handleRating={handleRating} />
      {products && products.length > 0 ? (
        <div className="flex h-full flex-wrap justify-center">
          {filterProducts(products, filterRate).map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
export default ProductsPageWithHooks
