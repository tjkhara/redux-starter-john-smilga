import React from "react"
// components
import Navbar from "./components/Navbar"
import CartContainer from "./components/CartContainer"
// items
import cartItems from "./cart-items"
// redux stuff
import { createStore } from "redux"
import reducer from "./reducer"

import { INCREASE } from "./actions"

// initial store
const initialStore = {
  count: 0,
}

// store
const store = createStore(reducer, initialStore)

store.dispatch({ type: INCREASE })

// get state
console.log(store.getState())

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  )
}

export default App
