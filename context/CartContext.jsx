const { createContext, useContext, useState } = require("react");

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  /***
   * @name cart
   * @param {Map<String, number>}
   */
  const [cart, setCart] = useState(new Map())

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