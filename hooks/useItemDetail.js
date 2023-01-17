import { useCartContext } from "@context/CartContext"
import { useCallback, useMemo, useState } from "react"

const useItemDetail = (avocado) => {
  const CANTIDAD_MINIMA = useMemo(() => 1, [])
  const CANTIDAD_MAXIMA = useMemo(() => 10, [])

  const [cantidad, setCantidad] = useState(() => 0)
  const { cart, setCart } = useCartContext()

  const handleSubmit = useCallback(() => {
    let cartDraft = {...cart}

    if(!isCantidadCorrect(cantidad)){
      return
    }

    const cartSize = Object.keys(cartDraft).length

    if (!cartSize) {
      cartDraft = {
          ...cartDraft,
          [avocado.id]: {
            item: avocado,
            cantidad
          }
        }
    }

    if (cartSize) {
      const previousItem = cartDraft[avocado.id]

      if (previousItem) {
        cartDraft = {
          ...cartDraft,
          [avocado.id]: {
            ...cartDraft[avocado.id],
            cantidad: previousItem.cantidad + cantidad
          }
        }
      }

      if (!previousItem) {
        cartDraft = {
          ...cartDraft,
          [avocado.id]: {
            item: avocado,
            cantidad: cantidad
          }
        }
      }
    }

    setCart(cartDraft)
  }, [cantidad, avocado.id, cart])

  const handleChange = useCallback(
    (event) => {
      const value = parseInt(event.target.value)
      if (!isCantidadCorrect(value)) {
        event.target.value = cantidad
        return
      }

      setCantidad(value)
    },
    [cantidad]
  )

  function isCantidadCorrect(value) {
    if (value < CANTIDAD_MINIMA || value > CANTIDAD_MAXIMA) return false

    return true
  }

  return { cantidad, setCantidad, handleChange, handleSubmit }
}

export default useItemDetail
