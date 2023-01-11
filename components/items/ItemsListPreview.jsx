import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"
import { getAllAvocados } from "utils"

const ItemsListPreview = () => {
  const { data, error, isLoading } = useSWR("avocados/all", getAllAvocados)

  if (isLoading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="flex flex-col gap-5 w-full sm:flex-row sm:flex-wrap sm:px-0">
      {Object.keys(data).map((avocadoId) => {
        const { image, name, price } = data[avocadoId]
        return (
          <ItemPreview
            key={"avocado-" + avocadoId}
            id={avocadoId}
            image={image}
            name={name}
            price={price}
          />
        )
      })}
    </div>
  )
}

const ItemPreview = ({ id, image, name, price }) => {
  return (
    <Link href={'product/' + id} className="w-full sm:w-[48%] hover:transform hover:-translate-y-1 border-gray-300 border-2 rounded-xl overflow-hidden">
      <Image
        className="w-full h-auto"
        src={image}
        alt={name + " image"}
        width={100}
        height={100}
      />
      <strong>{name}</strong>
      <span>{price}</span>
    </Link>
  )
}

export default ItemsListPreview
