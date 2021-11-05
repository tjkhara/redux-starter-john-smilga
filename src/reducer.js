import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions"

// reducer
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    }
  }

  // ***** decrease start
  if (action.type === DECREASE) {
    let tempCart = []

    if (action.payload.amount === 1) {
      // remove the item
      tempCart = state.cart.filter(
        (cartItem) => action.payload.id !== cartItem.id
      )
    } else {
      // decrease the item
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
          }
        }
        return cartItem
      })
    }

    // Return the store
    return {
      ...state,
      cart: tempCart,
    }
  } // ***** decrease end

  // ***** Increase start
  if (action.type === INCREASE) {
    let tempCart = []

    tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = {
          ...cartItem,
          amount: cartItem.amount + 1,
        }
      }
      return cartItem
    })

    return {
      ...state,
      cart: tempCart,
    }
  } // ***** Increase end

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    }
  }
  return state
}

export default reducer
