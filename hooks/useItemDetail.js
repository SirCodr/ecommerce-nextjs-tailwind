import { useCartContext } from "@context/CartContext"
import { useCallback, useMemo, useState } from "react"

const useItemDetail = (avocado) => {
  const CANTIDAD_MINIMA = useMemo(() => 1, [])
  const CANTIDAD_MAXIMA = useMemo(() => 10, [])

  const [cantidad, setCantidad] = useState(() => 0)
  const { cart, addCart } = useCartContext()

  const handleSubmit = () => {
    if (!isCantidadCorrect(cantidad)) {
      return
    }
    
    addCart(cantidad, avocado)
  }

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
