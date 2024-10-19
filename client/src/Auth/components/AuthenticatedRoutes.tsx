import Header from "@/Global/components/Header"
import { Outlet } from "react-router-dom"

function AuthenticatedRoutes() {
  return (
    <section className="flex flex-col">
      <Header/>
      <Outlet/>
    </section>
  )
}

export default AuthenticatedRoutes