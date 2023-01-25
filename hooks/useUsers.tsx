import axios from 'axios'
import { IUser } from '@/types/IUser'
import { useEffect, useState } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/users')

      if (response && response.data) setUsers(response.data)
    } catch (error) {
      console.log('error occured')
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return { users }
}
