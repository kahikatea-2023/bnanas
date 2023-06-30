import connection from './connection'

export interface Cart {
  id: number
  name: string
  price: number
  quantity: number
  weight: number
}

export async function getCartById(id: number, db = connection) {
  return db('cart')
    .join('products', 'cart.product_id', 'products.id')
    .where('cart.user_id', id)
    .select(
      'cart.user_id as id',
      'products.name as name',
      'products.price as price',
      'cart.quantity as quantity',
      'products.weight as weight'
    ) as unknown as Cart[]
}