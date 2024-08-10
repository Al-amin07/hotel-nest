import team from '../../assets/images/team.avif'
import mission from '../../assets/images/mission.webp'
import offer from '../../assets/images/offer.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: "1500",
    });
  }, []);
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
   
      <div className="container mx-auto space-y-12">
        <div
          data-aos="fade-right"
          className=" flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
        >
          <img
            src={team}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col flex-1 p-6 dark:bg-gray-50">
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="my-4 dark:text-gray-600 text-lg">
            At Hotle Nest, we are dedicated to making your travel experience seamless and enjoyable. Our mission is to connect travelers with the perfect accommodations, whether it’s for a quick getaway, a business trip, or a dream vacation. We believe that everyone deserves a comfortable and memorable stay, and we’re here to provide the best options and support to make that happen.


            </p>
            <button className="bg-rose-500 hover:bg-rose-700 lg:w-2/6 px-3 py-2 rounded text-white font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse"
        >
          <img
            src={mission}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="my-6 dark:text-gray-600 text-lg">
            Our mission at Hotlenest is to redefine the way people find and book hotels by offering a seamless, personalized, and affordable experience. We aim to connect travelers with the perfect stay, ensuring comfort, convenience, and satisfaction at every step of their journey.
            </p>
            <button className="bg-rose-500 hover:bg-rose-700 lg:w-2/6 px-3 py-2 rounded text-white font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
        >
          <img
            src={offer}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
            <h3 className="text-2xl font-bold">What We Offer</h3>
            <ul className="my-6">
              <li className="">
                <span className="font-medium text-lg">
                Comprehensive Search: 
                </span>{" "}
                <span className=" dark:text-gray-600">
                Easily find the perfect hotel with our intuitive search tools and detailed filters.
                </span>
                
              </li>
             
              <li className="">
                <span className="font-medium text-lg">
                Personalized Recommendations:
                </span>{" "}
                <span className=" dark:text-gray-600">
                  {" "}
                  Receive suggestions tailored to your preferences, ensuring a perfect match for your travel style.
                </span>
              </li>
              <li className="">
                <span className="font-medium text-lg">
                Secure Booking : 
                </span>{" "}
                <span className=" dark:text-gray-600">
                  {" "}
                  Enjoy peace of mind with our safe and simple booking process, backed by reliable customer support.
                </span>
              </li>
            </ul>

            <button className="bg-rose-500 hover:bg-rose-700 lg:w-2/6 px-3 py-2 rounded text-white font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
