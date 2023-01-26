import { IProduct } from '@/types/IProduct'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')

      if (response && response.data) setProducts(response.data)
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products }
}
