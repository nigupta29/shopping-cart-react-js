import { createContext, useContext, useReducer } from 'react'
import { createRandomProduct } from '../utils/shopUtils'
import { shopReducer } from './ShopReducer'

const products = Array.from({ length: 15 }, () => createRandomProduct())
const initialShopState = {
  products,
  cart: []
}

const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const [shopState, dispatch] = useReducer(shopReducer, initialShopState)

  const cartItemCount = shopState.cart.reduce(
    (count, { quantity }) => count + quantity,
    0
  )

  const cartTotalAmount = shopState.cart.reduce(
    (count, { quantity, price }) => count + quantity * price,
    0
  )

  return (
    <ShopContext.Provider
      value={{
        ...shopState,
        dispatch,
        cartItemCount,
        cartTotalAmount
      }}
    >
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
