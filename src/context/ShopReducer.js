const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Reduce the stock of the product when added to the cart
      return state.map((product) =>
        product.id === action.payload.id && product.stock !== 0
          ? { ...product, stock: product.stock - 1 }
          : product
      )

    case 'REMOVE_FROM_CART':
      // Increase the stock of the product when removed from the cart
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock + 1 }
          : product
      )

    default:
      throw new Error('Unknown Dispatch function for Product Reducer')
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find((item) => item.id === action.payload.id)

      // Check if the product is already in the cart
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id && item.stock !== 0
            ? { ...item, quantity: item.quantity + 1, stock: item.stock - 1 }
            : item
        )
      }

      // If the product is not in the cart, add it with quantity 1
      const { id, title, img_src, price, stock } = action.payload
      return [
        ...state,
        { id, title, img_src, price, stock: stock - 1, quantity: 1 }
      ]
    }
    case 'REMOVE_FROM_CART': {
      const existingItem = state.find((item) => item.id === action.payload.id)

      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== existingItem.id)
      }

      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1, stock: item.stock + 1 }
          : item
      )
    }

    default:
      throw new Error('Unknown Dispatch function for Product Reducer')
  }
}

export const shopReducer = (state, action) => ({
  products: productReducer(state.products, action),
  cart: cartReducer(state.cart, action)
})
