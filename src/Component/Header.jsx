import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-[1380px] mx-auto flex navbar justify-between " >
        {/* logo */}
        <div>
          <button className="flex items-center justify-center gap-2">
            <img className="w-15" src={logo} alt="" />
            <p className="font-semibold text-lg">Pcare</p>
          </button>
        </div>

        {/* Page list */}
        <div className="gap-5 hidden text-lg md:flex">
          <NavLink>Home</NavLink>
          <NavLink>All Plants</NavLink>
          <NavLink>Add Plant</NavLink>
          <NavLink>My Plants</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
