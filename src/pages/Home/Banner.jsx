import Container from "../../components/Shared/Container";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Hero from "./Hero";
import img2 from '../../assets/images/8.jpg'
import img1 from '../../assets/images/banner-7.webp'
import img3 from '../../assets/images/19.jpeg'
import img4 from '../../assets/images/17.jpg'
// import img1 from '../../assets/images/banner-7.webp'
import img6 from '../../assets/images/banner-4.webp'
// import img6 from '../../assets/images/banner-6.webp'
// import img5 from '../../assets/images/banner-5.jpg'

const Banner = () => {
    return (
       <Container>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        //   disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper min-h-[600px] z-30 mt-0 rounded-lg"
      >
        <SwiperSlide>
            <Hero img={img1} />
        </SwiperSlide>
        <SwiperSlide>
            <Hero img={img2} />
        </SwiperSlide>
        <SwiperSlide>
            <Hero img={img3} />
        </SwiperSlide>
        <SwiperSlide>
            <Hero img={img4} />
        </SwiperSlide>
  
        <SwiperSlide>
            <Hero img={img6} />
        </SwiperSlide>
      
      </Swiper>

       </Container>
    );
};

export default Banner;