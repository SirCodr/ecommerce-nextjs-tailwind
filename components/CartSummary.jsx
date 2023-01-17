import Image from "next/image"

const CartSummary = ({ props }) => {
  console.log(props)
  const { image, name, cantidad, price } = props
  return (
    <div className="flex flex-col w-full border-t-2 border-t-gray-300 first:border-t-0">
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt={name + " image"}
          width={100}
          height={100}
          className="w-80"
        />
      </div>
      <h2 className="text-blue-500 text-2xl font-medium">{name}</h2>
      <span className="text-gray-500">
        {cantidad} x {price}
      </span>
      <button className="flex items-center justify-center border-gray-300 border-2 rounded ml-auto px-2 py-1 h-7 w-8">
        X
      </button>
    </div>
  )
}

export default CartSummary
