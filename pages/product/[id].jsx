import ItemDetail from "@components/items/ItemDetail"
import { useRouter } from "next/router"

const PoductPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <ItemDetail id={id} />
  )
}

export default PoductPage