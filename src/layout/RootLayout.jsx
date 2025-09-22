import { Outlet } from "react-router";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

const RootLayout = () => {
  return (
    <div>
        {/* header */}
      <Header></Header>
      
      {/* Outlet */}
      <div className="max-w-[1380px] mx-auto">
        <Outlet></Outlet>
      </div>

      {/* Footer */}

      <Footer></Footer>

    </div>
  );
};

export default RootLayout;
