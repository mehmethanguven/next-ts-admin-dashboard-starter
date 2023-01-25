import { ICart } from '@/types/ICart'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useCarts = () => {
  const [carts, setCarts] = useState<ICart[]>([])

  const fetchCarts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/carts')

      if (response && response.data) setCarts(response.data['carts'])
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchCarts()
  }, [])

  return { carts }
}
