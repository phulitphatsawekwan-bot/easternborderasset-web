
import CollectionTypes from "@/components/home/CollectionTypes";
import CustomersFeedback from "@/components/home/CustomersFeedback";
import InquiryType from "@/components/home/InquiryType";
import PreviewVideo from "@/components/home/PreviewVideo";
import RealestateContainer from "@/components/home/RealestateContainer";
import RealestateLists from "@/components/home/RealestateLists";
import CategoryHome from "@/components/search/CategoryHome";
import SearchForm from "@/components/search/Searchbar";
import { useTranslation } from "react-i18next";


const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="overflow-hidden flex items-center justify-center bg-black h-[300px] md:h-100">
        <PreviewVideo />
        <div className="absolute z-10 items-center justify-center">
          <h1 className="text-center text-white text-3xl md:text-6xl font-bold">Eastern Border Asset</h1>
          <p className='text-center text-white md:text-3xl font-bold'>{t("heroSubtitle")}</p>
        </div>
      </div>
      <div className="bg-white h-[auto] items-center justify-center">
        <div className="flex px-5 items-center justify-center">
          <div className="flex w-[450px] lg:w-[800px] h-[auto] items-center 
        justify-center bg-white shadow-xl rounded-2xl z-10 transform translate-y-[-40px]">
            <SearchForm />
          </div>
        </div>
        <div>
          <div className="invisible md:visible flex items-center justify-center my-[40px]">
            <CategoryHome />
          </div>
        </div>
      </div>
      <div className="px-14 bg-[#eef1ff] items-center justify-center">
        <h1 className="flex justify-center pt-10 text-2xl lg:text-3xl text-blue-800 font-bold">{t("recommend")}</h1>
        <div className='inline-block w-full'>
          <RealestateLists />
        </div>
      </div>
      <div className="px-14 bg-[#eef1ff] items-center justify-center">
        <h1 className="flex justify-center pt-10 text-2xl lg:text-3xl text-blue-800 font-bold">{t("customerfeedback")}</h1>
        <p className="text-center text-blue-800 opacity-60">{t("customerfeedbackdescrption")}</p>
        <div className='inline-block w-full'>
          <CustomersFeedback />
        </div>
      </div>
      <div>
        <CollectionTypes />
      </div>
      <div className="bg-fixed bg-cover bg-full bg-[url(..\src\assets\fgthgrtyh.png)]">
        <InquiryType />
      </div>
    </div>
  );
}
export default Home;