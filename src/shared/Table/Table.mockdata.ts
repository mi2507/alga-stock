export interface Product{
  id: number
  name: string
  price: number
  stock: number
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Cookie',
    price: 1.25,
    stock: 5
  
  },
  {
    id: 2,
    name: 'Milk',
    price: 1.25,
    stock: 25
  
  },
  {
    id: 3,
    name: 'Detergent',
    price: 2.25,
    stock: 15
  
  },
  {
    id: 4,
    name: 'Chocolate',
    price: 5.25,
    stock: 40,
  }
]

export default Products