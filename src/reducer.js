import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions"

// reducer
const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type === DECREASE) {
    if (action.payload.amount === 1) {
      // remove the item
      return {
        ...state.cart,
        cart: state.cart.filter(
          (cartItem) => action.payload.id !== cartItem.id
        ),
      }
    } else {
      // decrease the item
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (action.payload.id === cartItem.id) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            }
          } else {
            return {
              ...cartItem,
            }
          }
        }),
      }
    }
  }

  if (action.type === INCREASE) {
    return {
      ...state,
      cart: state.cart.map((cartItem) => {
        if (action.payload.id === cartItem.id) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          }
        } else {
          return {
            ...cartItem,
          }
        }
      }),
    }
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    }
  }
  return state
}

export default reducer
