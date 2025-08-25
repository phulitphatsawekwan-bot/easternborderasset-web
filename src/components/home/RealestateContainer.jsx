import useRealestateStore from "@/store/realestate-store"
import RealestateLists from "./RealestateLists"
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useSearchParams } from "react-router";

const RealestateContainer = () => {
  const actionListRealestate = useRealestateStore((state) => state.actionListRealestate);
  const actionFilter = useRealestateStore((state) => state.actionFilter);
  const [searchParams] = useSearchParams();
  

  // Clerk
  const { user } = useUser()
  const id = user?.id ?? null;

  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const type = searchParams.get('type')
  const price = searchParams.get('price')

  useEffect(() => {
    if (category || search || type || price) {
      // ถ้ามี filter ให้เรียก actionFilter
      actionFilter(category, search, type, price)
    } else {
      // ไม่มี filter ให้เรียก list ทั้งหมด
      actionListRealestate(id);
    }
  }, [category, search, type, price, id, actionFilter, actionListRealestate]);

  return (
    <div>
      <RealestateLists />
    </div>
  )
}
export default RealestateContainer;
