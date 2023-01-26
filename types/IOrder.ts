export interface IOrder {
  name: {
    first: string
    last: string
  }
  total: number
  status: string
  date: string
  id: number
  method: string
}
