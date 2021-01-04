export interface Product{
  _id: string
  name: string
  price: number
  stock: number
  createdAt?: string
  updatedAt?: string
}

const Products: Product[] = [
  {
    _id: '1',
    name: 'Cookie',
    price: 1.25,
    stock: 5
  
  },
  {
    _id: '2',
    name: 'Milk',
    price: 1.25,
    stock: 25
  
  },
  {
    _id: '3',
    name: 'Detergent',
    price: 2.25,
    stock: 15
  
  },
  {
    _id: '4',
    name: 'Chocolate',
    price: 5.25,
    stock: 40,
  }
]

export default Products