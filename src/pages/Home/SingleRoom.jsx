import { Link } from "react-router-dom";

const SingleRoom = ({room}) => {
  return (
    <Link to={`/room/${room?._id}`}>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 pb-6 group">
        {/*  <!-- Image --> */}
        <figure>
          <img src={room?.image} alt="card image" className="aspect-video w-full group-hover:scale-105" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-3">
          <header className="mb-4 flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={room?.host?.image}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            {/**/}
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                {room?.location}
              </h3>
              <p className="text-sm text-slate-400">
                {" "}
                By {room?.host?.name}
              </p>
            </div>
          </header>
          <p className="line-clamp-3">{room?.description}</p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        {/* <div className="flex justify-end gap-2 p-2 pt-0">
          <Link to={`/community-details/${item._id}`}>
            <button className="inline-flex  h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
              <span>Read more</span>
            </button>
          </Link>
        </div> */}
      </div>
    </Link>
  );
};

export default SingleRoom;
