import { Link } from "react-router";
import { Button } from "../ui/button"
import Home from "@/Pages/Home";
import navbarlogo from "@/assets/white_logo_on_nav_bar.png"

const Logo = () => {
  return (
    <Button asChild className="bg-transparent border-none shadow-none hover:none hover:bg-transparent">
        <div className="cursor-pointer" onClick={() => window.location.href ="https://easternborderasset-web.vercel.app/"}><img src={navbarlogo} width={120} /></div>
    </Button>
  );
};
export default Logo
