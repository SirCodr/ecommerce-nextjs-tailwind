import Header from "@components/header"

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col gap-y-5 w-full h-screen'>
      <div className="h-auto">
        <Header />
      </div>
      <div className="w-full flex flex-col px-4 pb-5 sm:items-center">
        { children }
      </div>
    </div>
  )
}

export default Layout