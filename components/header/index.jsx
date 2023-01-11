import { useCartContext } from "@context/CartContext"

const Header = () => {
  const { cart } = useCartContext()

  return (
    <div className="py-3 border-b-2 border-gray-700">
      <div className="flex justify-between px-0 sm:px-32">
        <div>
          <span>Avo Store</span>
        </div>
        <div>Canasta ({cart.length})</div>
      </div>
    </div>
  )
}

export default Header
