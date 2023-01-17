import useItemDetail from "hooks/useItemDetail"
import Image from "next/image"

const ItemDetail = ({ avocado }) => {
  const { image, name, price, sku } = avocado
  const { cantidad, handleChange, handleSubmit } = useItemDetail(avocado)

  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex justify-center w-full">
          <Image
            className="w-3/5"
            src={image}
            alt={name + " image"}
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center px-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p>{price}</p>
          <div className="w-fit py-1 px-2 rounded text-gray-700 bg-gray-200">
            <small>SKU: {sku}</small>
          </div>
          <div className="flex">
            <input
              type="number"
              onChange={handleChange}
              defaultValue={cantidad}
              className="border-gray-300 rounded border-r-0 border-2"
            />
            <button
            className="bg-green-500 rounded rounded-l-none py-2 px-4 text-white font-medium w-32 transition-colors hover:bg-green-600"
            onClick={handleSubmit}>
              <small>Add to Cart</small>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ItemDetail
