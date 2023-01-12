import Avocado from "@components/SVGIcons/Avocado"
import Canasta from "@components/SVGIcons/Canasta"
import { useCartContext } from "@context/CartContext"
import Link from "next/link"

const Header = () => {
  const { cart } = useCartContext()

  return (
    <div className="border-b-2 border-gray-200 border-2">
      <div className="flex justify-between px-0 sm:px-32">
        <div className="p-2 bg-gray-100 hover:bg-gray-200">
          <Link href='/' className="group flex flex-row items-center p-1 gap-x-2">
            <Avocado className="group-hover:transform group-hover:-translate-y-1 transition-transform" />
            <span>Avo Store</span>
          </Link>
        </div>
        <Link href='cart' className="flex items-center p-2 gap-x-2 hover:bg-gray-100">
          <Canasta />
          Canasta ({cart.size})
        </Link>
      </div>
    </div>
  )
}

export default Header
