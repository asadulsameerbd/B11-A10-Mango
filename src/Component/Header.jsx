import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import "../App.css";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User Logout successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.message,
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="bg-base-100 shadow-lg">
      <div className="max-w-[1380px] mx-auto flex navbar justify-between ">
        {/* logo */}
        <Link to={"/"}>
          <button className="flex items-center hover:cursor-pointer justify-center gap-2">
            <img className="w-12" src={logo} alt="logo" />
            <p className="font-semibold text-lg">Pcare</p>
          </button>
        </Link>

        {/* Page list */}
        <ul className="gap-5 hidden text-lg md:flex items-center">
          <li>
            <NavLink
              className={
                "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
              }
              to={"/allplant"}
            >
              All Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
              }
              to={"/addplant"}
            >
              Add Plant
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
              }
              to={"/myplant"}
            >
              My Plants
            </NavLink>
          </li>

          {/* Dynamic User */}
          {user ? (
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className="cursor-pointer group relative"
              >
                {/* Avatar */}
                <img
                  src={user.photo || "https://i.ibb.co/YdLkWjT/user.png"}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full ring-2 ring-green-400 transition-transform group-hover:scale-110"
                />

                {/* Tooltip (user name) */}
                <div className="absolute w-20 -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "User"}
                </div>
              </div>

              {/* Dropdown (Logout btn) */}
              {open && (
                <div className="absolute right-0 top-12 z-20 bg-white shadow-lg rounded-lg p-2">
                  <button
                    className="btn hover:bg-green-700 bg-green-500 rounded-xl w-full text-white"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // if user is not available then
            <div className="flex gap-5">
              <li>
                <NavLink
                  className={
                    "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={
                    "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-full"
                  }
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
