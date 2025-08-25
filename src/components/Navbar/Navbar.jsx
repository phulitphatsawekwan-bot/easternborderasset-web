import About from "./About"
import Contact from "./Contact"
import DropdownListMenu from "./DropdownListMenu"
import Favorite from "./Favorite"
import Home from "./Home"
import Language from "./Language"
import Logo from "./Logo"
import Recommend from "./Recommend"

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-col items-center
        py-8 justify-between sm:flex-row gap-4" style={{background: 'linear-gradient(90deg, rgba(154,123,189,1) 0%, rgba(29,29,153,1) 100%)'}}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row items-center">
                <div className="flex justify-between px-3">
                    <Logo />
                </div>
                <div className="flex justify-between gap-6 font-bold text-white ">
                    <div className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"><Home /></div>
                    <div className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"><Recommend /></div>
                    <div className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"><About /></div>
                    <div className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"><Contact /></div>
                </div>
            </div>
            <div className="flex justify-between items-center gap-2 lg:mr-5 ">
                <Language />
                <Favorite />
                <DropdownListMenu />
            </div>
        </div>
    </nav>
  )
}
export default Navbar