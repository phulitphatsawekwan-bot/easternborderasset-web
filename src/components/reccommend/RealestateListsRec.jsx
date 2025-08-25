import RealestateCard from "../card/RealestateCard";
import useRealestateStore from "@/store/realestate-store";

const RealestateLists = () => {
    const realestates = useRealestateStore((state)=>state.realestates);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4 p-10">
            {
                realestates.map((item) => {
                    // console.log(item)
                    return <RealestateCard key={item.id} 
                    realestates={item} />;
                })}
        </section>
    )
}
export default RealestateLists