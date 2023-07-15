import background1 from "../imgs/homepage-imgs/homepage1.jpg";
import background2 from "../imgs/homepage-imgs/homepage2.jpg";
import background3 from "../imgs/homepage-imgs/homepage3.jpg";
import background4 from "../imgs/homepage-imgs/homepage4.jpg";
import background5 from "../imgs/homepage-imgs/homepage5.jpg";
import background6 from "../imgs/homepage-imgs/homepage6.jpg";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const HomePage = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={background2} alt="Slide 2"></img></SwiperSlide>
        <SwiperSlide><img src={background1} alt="Slide 1"></img></SwiperSlide>
        <SwiperSlide><img src={background3} alt="Slide 3"></img></SwiperSlide>
        <SwiperSlide><img src={background4} alt="Slide 4"></img></SwiperSlide>
        <SwiperSlide><img src={background5} alt="Slide 5"></img></SwiperSlide>
        <SwiperSlide><img src={background6} alt="Slide 6"></img></SwiperSlide>
      </Swiper>

    </>
  );
  };
  
  export default HomePage;