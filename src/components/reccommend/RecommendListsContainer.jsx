import RealestateCard from "../card/RealestateCard";

const RecommendListsContainer = ({ realestates = [], loading }) => {
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!realestates.length) return <p className="text-center mt-10">No results found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-14">
      {realestates.map((item) => (
        <RealestateCard key={item.id} realestates={item} />
      ))}
    </div>
  );
};

export default RecommendListsContainer;
