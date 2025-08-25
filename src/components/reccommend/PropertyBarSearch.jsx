import { useSearchParams } from "react-router"
import { Input } from "../ui/input"
import { useDebouncedCallback } from "use-debounce"
import { useTranslation } from "react-i18next";

const PropertyBarSearch = () => {
  const { i18n, t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearch = useDebouncedCallback((value)=>{
    console.log(value);
    const params = new URLSearchParams(searchParams)
    if(value){
        params.set ('search',value)
    }else{
      params.delete('search')
    }
    setSearchParams(params)

  },500);


  const hdlSearch = (e) => {
    // console.log(e.target.value)
    updateSearch(e.target.value)
  }

  return (
    <div className="flex items-center justify-center bg-purple-800 bg-opacity-70 h-[80px] w-full">
      <Input
          onChange={hdlSearch}
          type='text'
          placeholder={t("search")}
          className="max-w-xl bg-white"
      />
    </div>
  )
}
export default PropertyBarSearch