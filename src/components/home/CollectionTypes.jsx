import { CircleChevronRight } from 'lucide-react';
import { useTranslation } from "react-i18next";
import HouseBgImg from "../assets/tghfthchh.png";

const CollectionTypes = () => {
  const { t } = useTranslation();
  return (
    <div className="md:h-[170vh] w-100 h-[370vh] bg-no-repeat bg-[position:-50rem_5rem] bg-[url(/images/finaloutlinelogoeastopacitt.png)] bg-cover">
      <div className="md:flex gap-10 justify-center p-14">
        <div className='w-100 grid'>
          <div>
            <h1 className="text-xl text-blue-800 font-semibold">{t("ourservice")}</h1>
            <div className='text-sm text-clip lg:w-[60vh]'>
              <li>{t("ourservicelist1")}</li>
              <li>{t("ourservicelist2")}</li>
              <li>{t("ourservicelist3")}</li>
              <li>{t("ourservicelist4")}</li>
              <li>{t("ourservicelist5")}</li>
            </div>
          </div>
          <div className='my-10'>
            <h1 className="text-xl text-blue-800 font-semibold">{t("whoweserve")}</h1>
            <h1 className="text-lg text-blue-800 font-semibold">{t("whoweservedescription")}</h1>
            <div className='text-sm text-clip lg:w-[60vh]'>
              <li>{t("whoweservelist1")}</li>
              <li>{t("whoweservelist2")}</li>
              <li>{t("whoweservelist3")}</li>
              <li>{t("whoweservelist4")}</li>
            </div>
          </div>
        </div>
        <div className='gap-5 grid md:grid-cols-2 justify-center'>
          <div>
            <div className="bg-cover w-[20rem] h-[20rem] rounded-lg" style={{ backgroundImage: `url(${HouseBgImg})` }}>
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=house"}>
                  <h1 className="text-white text-2xl p-5">{t("house")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url(..\src\assets\hjhjkytgjyt.png)] bg-cover w-[20rem] h-[20rem] rounded-lg">
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=condo"}>
                  <h1 className="text-white text-2xl p-5">{t("condo")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url(..\src\assets\fghbngjnjy.png)] bg-cover w-[20rem] h-[20rem] rounded-lg">
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=villa"}>
                  <h1 className="text-white text-2xl p-5">{t("villa")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url(..\src\assets\ghyjyj.png)] bg-cover w-[20rem] h-[20rem] rounded-lg">
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=townhouse"}>
                  <h1 className="text-white text-2xl p-5">{t("townhouse")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url(..\src\assets\rrrgrghjny.png)] bg-cover w-[20rem] h-[20rem] rounded-lg">
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=commercial-building"}>
                  <h1 className="text-white text-2xl p-5">{t("commercialbuilding")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[url(..\src\assets\ghnghtrhththh.png)] bg-cover w-[20rem] h-[20rem] rounded-lg">
              <div className="bg-black bg-opacity-30 hover:bg-opacity-0 w-[20rem] h-[20rem] rounded-lg">
                <div className='cursor-pointer' onClick={() => window.location.href = "http://localhost:5173/recommend?category=land"}>
                  <h1 className="text-white text-2xl p-5">{t("land")}</h1>
                  <div className='flex justify-between'>
                    <p className="relative text-white mt-[11rem] p-5">{t("clickfordetails")}</p>
                    <div className='text-white mt-[11rem] p-5'><CircleChevronRight /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CollectionTypes
