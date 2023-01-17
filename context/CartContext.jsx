const { createContext, useContext, useState } = require("react");

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  /***
   * @name cart
   * @param cart.cantidad number
   * @param cart.item Object
   */
  const [cart, setCart] = useState({})

  return (
    <CartContext.Provider value={{cart, setCart}}>
      { children }
    </CartContext.Provider>
  )
}

function useCartContext(){
  return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartContext }