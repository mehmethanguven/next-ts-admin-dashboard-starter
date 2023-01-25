import { Button } from '@/components/Button'
import Loader from '@/components/Loader'
import { IUser } from '@/types/IUser'
import React from 'react'
import { BsPersonFill, BsPencil } from 'react-icons/bs'

type Props = {
  user: IUser
}

const ListItem = ({ user }: Props) => {
  if (!user) return <Loader />
  return (
    <li className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-5">
      <div className="flex items-center">
        <div className="rounded-lg bg-purple-100 p-3">
          <BsPersonFill className="text-purple-800" />
        </div>
        <p className="pl-4">{user.name.firstname + ' ' + user.name.lastname}</p>
      </div>
      <p className="text-right text-gray-600 sm:text-left">{user.email}</p>
      <p className="hidden md:block">{user.phone}</p>
      <p className="hidden md:block">{user.address.city}</p>
      <div className="hidden items-center justify-between sm:flex">
        <p>{user.address.zipcode}</p>
        <Button
          className="rounded-lg bg-purple-500 text-white hover:bg-purple-700 hover:text-white"
          onClick={() => alert('Edit')}
        >
          <BsPencil />
        </Button>
      </div>
    </li>
  )
}

export default ListItem
