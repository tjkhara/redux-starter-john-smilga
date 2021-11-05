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
    console.log("trying to decrease")
  }

  if (action.type === INCREASE) {
    console.log("trying to increase")
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
