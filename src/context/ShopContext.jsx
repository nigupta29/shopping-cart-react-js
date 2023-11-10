import { createContext, useContext, useReducer } from 'react'
import { shopReducer } from './ShopReducer'
import { createRandomProduct } from '../utils/shopUtils'

const products = Array.from({ length: 15 }, () => createRandomProduct())
const initialShopState = {
  products,
  cart: []
}

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [shopState, dispatch] = useReducer(shopReducer, initialShopState)

  return (
    <ShopContext.Provider
      children={children}
      value={{ ...shopState, dispatch }}
    />
  )
}

export const useShop = () => {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }

  return context
}
