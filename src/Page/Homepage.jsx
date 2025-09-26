import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../assets/1.jpg";
import banner2 from "../assets/2.jpg";
import banner3 from "../assets/3.jpg";
import tree from "../assets/tree.png";

import { useLoaderData } from "react-router";
import { Autoplay, Navigation } from "swiper/modules";
import PlantCard from "./PlantCard";

const Homepage = () => {
  const plantData = useLoaderData();
  console.log(plantData);

  return (
    <div>
      {/* Swiper js  */}

      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[250px] md:h-[500px] lg:h-[800px] object-cover rounded-2xl"
              src={banner1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[250px] md:h-[500px] lg:h-[800px] object-cover rounded-2xl"
              src={banner2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[250px] md:h-[500px] lg:h-[800px] object-cover rounded-2xl"
              src={banner3}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* NewPlant section  */}
      <div className="my-10">
        <div>
          <h1 className="text-center text-4xl font-semibold">All Plant </h1>

          {/* plant data */}
          {plantData.map((plant) => (
            <PlantCard plant={plant}></PlantCard>
          ))}
        </div>
      </div>

      {/* benefit of tree */}

      <div className="my-30 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10">
        <div className=" px-5 w-full ">
          <h1 className="text-4xl py-5 font-semibold ">Why need to <span className="text-green-500">Plant Tree</span></h1>
          <p className="text-sm py-5">
            Trees produce oxygen, which is essential for humans and animals to
            breathe. They absorb carbon dioxide, helping to reduce the effects
            of climate change. Planting trees prevents soil erosion and keeps
            the land fertile. Trees provide shade and cool the environment,
            reducing extreme heat. They are home to birds, insects, and many
            other wildlife species. Trees give us fruits, wood, and medicinal
            resources. Planting trees improves air quality by filtering dust and
            pollution. They beautify the environment and make our surroundings
            more pleasant. Trees help conserve water by maintaining the water
            cycle. Planting trees ensures a greener and healthier future for the
            next generations.
          </p>
        </div>
        <div className="w-full flex justify-center px-2 ">
          <img src={tree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
