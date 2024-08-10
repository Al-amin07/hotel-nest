import img1 from "../../assets/Saved/Rectangle 5.png";
import img2 from "../../assets/Saved/Rectangle 8.png";
import img3 from "../../assets/Saved/Rectangle 6.png";
import img4 from "../../assets/Saved/Rectangle 7.png";
import img5 from "../../assets/Saved/Rectangle 9.png";
import img6 from "../../assets/Saved/Rectangle 11.png";
import img7 from "../../assets/Saved//Rectangle 10.png";
import Container from "../../components/Shared/Container";

const NewItem = () => {
  return (
    <Container>
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl  font-semibold text-center">
          Discover This Season's Must-Visit Countries
        </h2>
        <p className="text-slate-600 md:w-3/4 mx-auto text-center mt-4 mb-8">
          Set your sights on the world’s most talked-about destinations. From
          breathtaking natural wonders to bustling urban landscapes, these
          trending countries are capturing the hearts of travelers everywhere
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 grid-rows-3 gap-4">
          <div className="relative hover:opacity-80   md:col-span-3 lg:col-span-6 w-full ">
            <img src={img1} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Maldives
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-3 lg:col-span-6 w-full ">
            <img src={img2} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Indonesia
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-2 lg:col-span-4 w-full ">
            <img src={img3} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Srilanka
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-3 lg:col-span-5 w-full ">
            <img src={img4} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              North America
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-1 lg:col-span-3 w-full ">
            <img src={img5} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Kashmir
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-2 lg:col-span-5 w-full ">
            <img src={img6} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Bangladesh
            </h3>
          </div>
          <div className="relative hover:opacity-80  md:col-span-4 lg:col-span-7 w-full ">
            <img src={img7} alt="" className="w-full h-[300px]" />
            <h3 className="text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-medium text-white">
              Bandarban
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewItem;
