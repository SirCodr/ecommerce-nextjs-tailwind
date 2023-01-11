import Header from "@components/header"

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col gap-5 w-full h-screen'>
      <div className="h-auto">
        <Header />
      </div>
      <div className="w-full flex flex-col px-0 pb-5 sm:px-32">
        { children }
      </div>
    </div>
  )
}

export default Layout