import { useCartContext } from "@context/CartContext"
import { useCallback, useMemo, useState } from "react"

const useItemDetail = (avocadoId) => {
  const CANTIDAD_MINIMA = useMemo(() => 1, [])
  const CANTIDAD_MAXIMA = useMemo(() => 10, [])

  const [cantidad, setCantidad] = useState(() => 0)
  const { cart, setCart } = useCartContext()

  const handleSubmit = useCallback(() => {
    const cartDraft = new Map(cart)

    if(!isCantidadCorrect(cantidad)){
      return
    }

    if (!cart.size) {
      cartDraft.set(avocadoId, cantidad)
    }

    if (cart.size) {
      const previousCantidad = cartDraft.get(avocadoId)

      if (previousCantidad) {
        cartDraft.set(avocadoId, (previousCantidad + cantidad))
      }

      if (!previousCantidad) {
        cartDraft.set(avocadoId, cantidad)
      }
    }

    setCart(cartDraft)
  }, [cantidad, avocadoId, cart])

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
