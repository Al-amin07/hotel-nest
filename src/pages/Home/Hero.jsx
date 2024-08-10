import PropTypes from 'prop-types'
const Hero = ({img}) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
        Discover Your Perfect Stay with <span className="text-[#F43F5E]">Hotle Nest</span>
          </h1>
        
          <br />
          <button className=" px-6 py-3 rounded-lg  font-medium text-white capitalize transition-colors  duration-300 bg-[#F43F5E]">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  img: PropTypes.string
}

export default Hero;
