import cartReducer from "./cartReducer";

const { createContext, useContext, useState, useReducer, useCallback } = require("react");

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  /***
   * @name cart
   * @param cart.cantidad number
   * @param cart.item Object
   */
  const initialState = {}

  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const addCart = useCallback((cantidad, avocado) => {
    let cartDraft = { ...cart }
    const cartSize = Object.keys(cartDraft).length

    if (!cartSize) {
      cartDraft = {
        ...cartDraft,
        [avocado.id]: {
          item: avocado,
          cantidad,
        },
      }
    }

    if (cartSize) {
      const previousItem = cartDraft[avocado.id]

      if (previousItem) {
        cartDraft = {
          ...cartDraft,
          [avocado.id]: {
            ...cartDraft[avocado.id],
            cantidad: previousItem.cantidad + cantidad,
          },
        }
      }

      if (!previousItem) {
        cartDraft = {
          ...cartDraft,
          [avocado.id]: {
            item: avocado,
            cantidad: cantidad,
          },
        }
      }
    }

    dispatch({
      type: 'ADD',
      payload: cartDraft
    })
  }, [cart])

  const removeItem = useCallback((avocadoId) => {
    let cartDraft = {...cart}
    delete cartDraft[avocadoId]
    dispatch({type: 'REMOVE_ITEM', payload: cartDraft})
  }, [cart])

  return (
    <CartContext.Provider value={{cart, addCart, removeItem}}>
      { children }
    </CartContext.Provider>
  )
}

function useCartContext(){
  return useContext(CartContext)
}

export { CartContext, CartContextProvider, useCartContext }