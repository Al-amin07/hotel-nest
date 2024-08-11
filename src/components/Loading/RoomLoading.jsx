import Container from "../Shared/Container";

const RoomLoading = () => {
  return (
   <Container>
     <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {[...Array(10).keys()].map((_, ind) => (
        <div key={ind} className="col-span-1 animate-pulse">
          <div className="flex flex-col gap-2 w-full">
            <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-gray-300"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
   </Container>
  );
};

export default RoomLoading;
