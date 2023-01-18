import { useCartContext } from "@context/CartContext"
import { useMemo } from "react"
import CartSummary from "./CartSummary"

const CartList = () => {
  const { cart } = useCartContext()
  const cartSize = useMemo(() => Object.keys(cart).length, [cart])
  const cartItemsTotal = useMemo(() => {
    return Object.values(cart).reduce((acc, cur) => acc + cur.cantidad, 0)
  }, [cart])

  return (
    <div className="w-full flex flex-col gap-y-4">
      {!cartSize ? (
        <section className="w-full bg-yellow-100 border-yellow-400 border-2 py-2 px-4 rounded">
          <h4 className="text-xl font-medium">Your cart is empty</h4>
          <p>You will to add some items to the cart before you can checkout.</p>
        </section>
      ) : (
        Object.values(cart).map((avocado) => {
          const { cantidad, item } = avocado
          return <CartSummary key={item.id} props={{ ...item, cantidad }} />
        })
      )}
      <section className="w-full flex items-center justify-between py-2 px-4 border-gray-200 border-2 rounded">
        <div>
          <span className="font-medium">Sub total:</span> {cartItemsTotal}
        </div>
        <button className="bg-black text-white font-medium py-1 px-4 rounded">
          Check out
        </button>
      </section>
    </div>
  )
}

export default CartList