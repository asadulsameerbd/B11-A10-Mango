import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../assets/1.jpg';
import banner2 from '../assets/2.jpg';
import banner3 from '../assets/3.jpg';

import { Autoplay, Navigation } from "swiper/modules";

const Homepage = () => {
  return (
    <div>
      {/* Swiper js  */}

      <Swiper navigation={true} modules={[Navigation,Autoplay]} autoplay={{delay:3000}}>
        <SwiperSlide>
            <div>
                <img className="w-full h-[800px] rounded-2xl" src={banner1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full h-[800px] rounded-2xl" src={banner2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className="w-full h-[800px] rounded-2xl" src={banner3} alt="" />
            </div>
        </SwiperSlide>
        

        
      </Swiper>


      {/* NewPlant section  */}
      <div className="my-10">
         <div>
            <h1 className="text-center text-4xl font-semibold">Newplant Section</h1>
         </div>
      </div>


      
    </div>
  );
};

export default Homepage;
