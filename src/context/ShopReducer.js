const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Reduce the stock of the product when added to the cart
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock - 1 }
          : product
      )

    case 'REMOVE_FROM_CART': {
      return state
    }

    default:
      throw new Error('Unknown Dispatch function for Product Reducer')
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find((item) => item.id === action.payload.id)
      const { id, title, img_src, price, stock } = action.payload

      // Check if the product is already in the cart
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1, stock: stock - 1 }
            : item
        )
      }

      // If the product is not in the cart, add it with quantity 1
      return [
        ...state,
        { id, title, img_src, price, stock: stock - 1, quantity: 1 }
      ]
    }
    case 'REMOVE_FROM_CART': {
      return state
    }

    default:
      throw new Error('Unknown Dispatch function for Product Reducer')
  }
}

export const shopReducer = (state, action) => ({
  products: productReducer(state.products, action),
  cart: cartReducer(state.cart, action)
})
