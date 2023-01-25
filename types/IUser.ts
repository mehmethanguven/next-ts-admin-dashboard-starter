export interface IUser {
  id: number
  email: string
  name: {
    firstname: string
    lastname: string
  }
  phone: string
  address: {
    city: string
    zipcode: string
  }
}
