import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import "../App.css";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, setUser } = use(AuthContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-base-100 shadow-lg">
      <div className="max-w-[1380px] mx-auto flex navbar justify-between ">
        {/* logo */}
        <Link to={"/"}>
          {user && user.name}
          <button className="flex items-center justify-center gap-2">
            <img className="w-15" src={logo} alt="" />
            <p className="font-semibold text-lg">Pcare</p>
          </button>
        </Link>

        {/* Page list */}
        <ul className="gap-5 hidden text-lg md:flex items-center">
          <li>
            <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"} to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"} >All Plants</NavLink>
          </li>
          <li>
            <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"} 
            to={'/addplant'}
            >Add Plant</NavLink>
          </li>
          <li>
            <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"}>My Plants</NavLink>
          </li>

          {/* Dynamic User */}
          {user ? (
            <div onClick={() => setOpen(!open)}>
              <div className="relative">
                {/* avatar */}
                <div className="avatar relative">
                  <div className="group hover:ring-2 ring-primary w-10 rounded-full hover:ring-green-300">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
                      alt="User avatar"
                    />

                    {/* email tooltip */}
                    <div
                      className="absolute w-35 group-hover:opacity-60 opacity-0"
                    >
                      {user.name}
                    </div>
                  </div>
                </div>

                {/* if Open  */}
                {open && (
                  <div className="absolute top-18">
                    <div className="">
                      <button
                        className="btn hover:bg-green-700 bg-green-500 rounded-xl"
                        type="button"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) 
          
          : 

          // if user is not available then 
          
          (
            <div className="flex gap-5">
              <li>
                <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"} to={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink className={"relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"} to={"/register"}>Register</NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
