import ItemsListPreview from "./items/ItemsListPreview"

const Home = () => {
  return (
    <div className="w-full">
      <h1 className="flex justify-center w-full text-4xl font-semibold">Platzi Avo</h1>
      <div className="w-full flex flex-col gap-y-3">
        <section className="text-center">
          <span>¿Debería comer un avo hoy?</span>
        </section>
        <ItemsListPreview />
      </div>
    </div>
  )
}

export default Home