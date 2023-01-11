import ItemsListPreview from "./items/ItemsListPreview"

const Home = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold">Platzi Avo</h1>
      <div className="w-full">
        <span>¿Debería comer un avo hoy?</span>
        <ItemsListPreview />
      </div>
    </div>
  )
}

export default Home