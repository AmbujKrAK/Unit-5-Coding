import { createContext } from 'react'

const CartContext = createContext()

// CartContext.Provider

const CartContextProvider = () => {
  return (
    <CartContext.Provider value={0}>
      <App />
    </CartContext.Provider>
  )
}

// Provider = Provide the value
// Consumer  = Takes the value
