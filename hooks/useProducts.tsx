import axios from 'axios'
import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([])

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
