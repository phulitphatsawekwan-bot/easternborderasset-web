import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"

const LayoutAdmin = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
export default LayoutAdmin