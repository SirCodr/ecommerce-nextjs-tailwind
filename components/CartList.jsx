import { useCartContext } from "@context/CartContext"
import CartSummary from "./CartSummary"

const CartList = () => {
  const { cart } = useCartContext()

  if(!Object.keys(cart).length) return 'No hay productos'

  return (
    <div className="w-full flex flex-col gap-y-4">
      {Object.values(cart).map((avocado) => {
        const { cantidad, item } = avocado
        return <CartSummary key={item.id} props={{...item, cantidad}}  />
      })}
    </div>
  )
}

export default CartList