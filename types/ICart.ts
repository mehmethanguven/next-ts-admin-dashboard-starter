export interface ICart {
  id: number
  discountedTotal: number
  products: [
    {
      id: number
      title: string
      price: number
    }
  ]
  total: number
  totalProducts: number
  totalQuantity: number
  userId: number
}
