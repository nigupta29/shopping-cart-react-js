import { createContext, useContext, useReducer } from 'react'
import { createRandomProduct } from '../utils/shopUtils'
import { shopReducer } from './ShopReducer'

const products = Array.from({ length: 15 }, () => createRandomProduct())
const initialShopState = {
  products,
  cart: [
    {
      id: 'e69f2297-4fc0-4050-93f7-8027edb27288',
      title: 'Oriental Concrete Sausages',
      img_src: 'https://loremflickr.com/640/480/abstract?lock=5109053539745792',
      price: '642.00',
      stock: 4,
      quantity: 1
    }
  ]
}

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [shopState, dispatch] = useReducer(shopReducer, initialShopState)

  return (
    <ShopContext.Provider value={{ ...shopState, dispatch }}>
      {children}
    </ShopContext.Provider>
  )
}

export const useShop = () => {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }

  return context
}
