import Rooms from "../../components/Home/Rooms";

import Categories from "../../components/Categories/Categories";
import { useSearchParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const AllRooms = () => {
  const roomPerPage = 10;
  const [start, setStart] = useState(1);

  const [params] = useSearchParams();
  const category = params.get("category");
  useEffect(() => {
    setStart(1)
    console.log(start)
  },[category])
  const [totalItem, setTotalItem] = useState(null)
  const axiosCommon = useAxiosCommon();
  const { data: rooms = [], isLoading } = useQuery({
    queryKey: ["rooms", category, start],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/rooms?category=${category}&start=${start}`);
      console.log(data);
      setTotalItem(data?.totalResult)
      return data.result;
    },
  });
console.log(totalItem)
const totalPage = Math.ceil(totalItem / roomPerPage)
  const pages =[...Array(totalPage).keys().map(ind => ind + 1)];
  return (
    <div>
      <Categories />

      <Rooms rooms={rooms} isLoading={isLoading} />
      <div className="flex justify-center mt-12">
        <button
        disabled={start === 1}
          onClick={() => setStart(start - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-rose-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {pages.map((btnNum) => (
          <button
         
            key={btnNum}
            onClick={() => setStart(btnNum)}
            className={`hidden
              ${start === btnNum && "bg-rose-500 text-white"}
              px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-rose-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
         disabled={pages.length === start}
          onClick={() => setStart(start + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-rose-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllRooms;
