import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout