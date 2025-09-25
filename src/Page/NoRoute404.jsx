import bg from "../assets/404.jpg";

const NoRoute404 = () => {
  return (
    <div>
      <div
        className="hidden md:w-full md:h-screen md:flex items-center justify-center bg-center object-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div>
        <h1 className="text-xl pt-50 p-5 flex justify-center items-center md:hidden lg:hidden font-bold text-white ">
          404 | Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NoRoute404;
