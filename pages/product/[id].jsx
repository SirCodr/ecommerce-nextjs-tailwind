import ItemDetail from "@components/items/ItemDetail"
import { getAllAvocadoIds, getAvocadoById } from "utils"

const PoductPage = ({avocado}) => {
  return (
    <ItemDetail avocado={avocado}/>
  )
}

export async function getStaticPaths(){
  const avocadosIds = await getAllAvocadoIds()
  const paths = avocadosIds.map(avocadoId => ({params: { id: avocadoId }}))

  return { paths, fallback: false }
}

export async function getStaticProps(context){
  const { id } = context.params
  const avocado = await getAvocadoById(id)

  return { props: { avocado }}
}

export default PoductPage