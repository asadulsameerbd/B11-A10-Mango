import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../Component/Loading";
import banner1 from "../assets/1.jpg";
import banner2 from "../assets/2.jpg";
import banner3 from "../assets/3.jpg";
import easy from "../assets/easy.jpg";
import tree from "../assets/tree.png";
import PlantCard from "./PlantCard";

const Homepage = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plant-care-server-ten.vercel.app/clients?limit=6")
      .then(res => res.json())
      .then(data => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      {/* Swiper */}
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {[banner1, banner2, banner3].map((banner, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-[250px] md:h-[500px] lg:h-[800px] object-cover rounded-2xl"
              src={banner}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NewPlant Section */}
      <div className="my-10">
        <h1 className="text-center text-4xl py-10 font-semibold">All Plant</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </div>

      {/* Benefit of Tree */}
      <div className="my-30 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="px-5 w-full">
          <h1 className="text-4xl py-3 font-semibold">
            Why need to <span className="text-green-500">Plant Tree</span>
          </h1>
          <p className="text-sm py-5">
            Trees produce oxygen, absorb CO2, prevent soil erosion, provide shade,
            home to wildlife, give fruits & wood, improve air quality, beautify
            environment, conserve water, ensure greener future.Trees produce oxygen, absorb CO2, prevent soil erosion, provide shade,
            home to wildlife, give fruits & wood, improve air quality, beautify
            environment, conserve water, ensure greener future.Trees produce oxygen, absorb CO2, prevent soil erosion, provide shade,
            home to wildlife, give fruits & wood, improve air quality, beautify
            environment, conserve water, ensure greener future.Trees produce oxygen, absorb CO2, prevent soil erosion, provide shade,
            home to wildlife, give fruits & wood, improve air quality, beautify
            environment, conserve water, ensure greener future.
          </p>
        </div>
        <div className="w-full flex justify-center px-2">
          <img src={tree} alt="" />
        </div>
      </div>

      {/* Beginner Friendly Plants */}
      <div className="my-30 grid grid-cols-1 items-center md:grid-cols-2 gap-10">
        <div className="w-full flex justify-center  px-2">
          <img className="rounded-3xl" src={easy} alt="" />
        </div>
        <div className="px-5 w-full">
          <h1 className="text-4xl py-3 font-semibold">
            Beginner Friendly <span className="text-green-500">Plant</span>
          </h1>
          <p className="text-sm py-5">
            Snake Plant, Aloe Vera, Money Plant, Spider Plant, Marigold, Mint, Basil –
            perfect for beginners. Easy to grow, little care, survive in different
            conditions, and enjoyable for gardening.nake Plant, Aloe Vera, Money Plant, Spider Plant, Marigold, Mint, Basil –
            perfect for beginners. Easy to grow, little care, survive in different
            conditions, and enjoyable for gardening.nake Plant, Aloe Vera, Money Plant, Spider Plant, Marigold, Mint, Basil –
            perfect for beginners. Easy to grow, little care, survive in different
            conditions, and enjoyable for gardening.nake Plant, Aloe Vera, Money Plant, Spider Plant, Marigold, Mint, Basil –
            perfect for beginners. Easy to grow, little care, survive in different
            conditions, and enjoyable for gardening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
