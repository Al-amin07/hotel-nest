import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import RoomLoading from "../../components/Loading/RoomLoading";
import Container from "../../components/Shared/Container";
import Card from "../../components/Home/Card";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const EightRoom = () => {
  const axiosCommon = useAxiosCommon();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms8"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/rooms8");
      return data;
    },
  });
  console.log(rooms);
  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      <div className="my-20">
        <h2 className="text-4xl font-semibold text-center">
        Deluxe Suite with Ocean View - Recently Booked!
        </h2>
        <p className="text-slate-600 md:w-3/4 mx-auto text-center mt-4 ">Experience luxury in our Hotel Ne, featuring stunning ocean views, a king-sized bed, and a private balcony. This room offers the perfect blend of comfort and elegance, complete with modern amenities such as a flat-screen TV, high-speed Wi-Fi, and a spacious bathroom with a soaking tub.</p>
        <div className='pt-12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
          {rooms.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EightRoom;
