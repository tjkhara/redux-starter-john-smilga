import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS } from "./actions"

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
    // decrease the item
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return {
          ...cartItem,
          amount: cartItem.amount - 1,
        }
      }
      return cartItem
    })

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

  // ***** REMOVE start
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    }
  }
  // ***** REMOVE end

  // ***** GET_TOTALS start
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        cartTotal.amount += amount
        cartTotal.total += amount * price
        return cartTotal
      },
      {
        total: 0,
        amount: 0,
      }
    )

    // Fix decimal problem on total
    total = parseFloat(total.toFixed(2))

    // Send back the new total and amount (cart remains the same)
    return {
      ...state,
      total,
      amount,
    }
  }
  // ***** GET_TOTALS end

  return state
}
// ***** reducer end

export default reducer
