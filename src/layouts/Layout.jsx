import BottomNavbar from "@/components/bottombar/BottomNavbar"
import ScrollToTopButton from "@/components/bottombar/ScrollToTopButton"
import ContactButtonScreen from "@/components/contact/ContactButtonScreen"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"

const Layout = () => {
  
  return (
    <div>
        <Navbar />
        <ScrollToTopButton />
        <ContactButtonScreen />
        <Outlet />
        <BottomNavbar />
    </div>
  )
}
export default Layout