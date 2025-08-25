import { Link } from "react-router";
import { Button } from "../ui/button"
import { useTranslation } from "react-i18next";
import houseicon from "@/assets/houseicon.png";
import condoicon from "@/assets/Condo.png";
import landicon from "@/assets/land.png";
import townhouseicon from "@/assets/Townhouse.png";
import commercialbuildingicon from "@/assets/commercial building.png";



const  CategoryHome = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="grid grid-cols-5 gap-8">
                <Button className="hover:scale-105 w-60 bg-white p-5 ring-2 ring-gray-100 rounded-xl shadow-xl h-20 hover:bg-transparent">
                    <Link to='http://localhost:5173/recommend?category=house' className="justify-between flex items-center gap-10">
                    <img src={houseicon} width={50} />
                    <h1 className="text-blue-800 text-xl font-bold">{t("house")}</h1>
                    </Link>
                </Button>
                <Button className="hover:scale-105 w-60 bg-white p-5 ring-2 ring-gray-100 rounded-xl shadow-xl h-20 hover:bg-transparent">
                    <Link to='http://localhost:5173/recommend?category=condo' className="justify-between flex items-center gap-10">
                    <img src={condoicon} width={50} />
                    <h1 className="text-blue-800 text-xl font-bold">{t("condo")}</h1>
                    </Link>
                </Button>
                <Button className="hover:scale-105 w-60 bg-white p-5 ring-2 ring-gray-100 rounded-xl shadow-xl h-20 hover:bg-transparent">
                    <Link to='http://localhost:5173/recommend?category=land' className="justify-between flex items-center gap-10">
                    <img src={landicon} width={50} />
                    <h1 className="text-blue-800 text-xl font-bold">{t("land")}</h1>
                    </Link>
                </Button>
                <Button className=" hover:scale-105 w-60 bg-white p-5 ring-2 ring-gray-100 rounded-xl shadow-xl h-20 hover:bg-transparent">
                    <Link to='http://localhost:5173/recommend?category=commercial-building' className="justify-between flex items-center gap-10">
                    <img src={commercialbuildingicon} width={50} />
                    <h1 className="text-blue-800 text-xl font-bold">{t("commercial")}<br/>{t("building")}</h1>
                    </Link>
                </Button>
                <Button className="hover:scale-105 w-60 bg-white p-5 ring-2 ring-gray-100 rounded-xl shadow-xl h-20 hover:bg-transparent">
                    <Link to='http://localhost:5173/recommend?category=townhouse' className="justify-between flex items-center gap-10">
                    <img src={townhouseicon} width={50} />
                    <h1 className="text-blue-800 text-xl font-bold">{t("townhouse")}</h1>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default CategoryHome