import { useContext, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger icon
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import "../App.css";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [openUser, setOpenUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = (
    <>
      <NavLink
        to="/"
        className="relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 md:hover:after:w-full px-3 py-2"
      >
        Home
      </NavLink>
      <NavLink
        to="/allplant"
        className="relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 md:hover:after:w-full px-3 py-2"
      >
        All Plants
      </NavLink>
      <NavLink
        to="/addplant"
        className="relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 md:hover:after:w-full px-3 py-2"
      >
        Add Plant
      </NavLink>
      <NavLink
        to="/myplant"
        className="relative after:content-[''] after:absolute after:-bottom-1 after:w-0 after:left-0 after:h-[2px] after:bg-amber-300 after:transition-all after:duration-300 md:hover:after:w-full px-3 py-2"
      >
        My Plants
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-lg">
      <div className="max-w-[1380px] mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-12" src={logo} alt="logo" />
          <p className="font-semibold text-lg">Pcare</p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 items-center">{navLinks}</ul>

        {/* Desktop User */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="relative">
              <img
                src={user.photo || "https://i.ibb.co/YdLkWjT/user.png"}
                alt="User avatar"
                className="w-10 h-10 rounded-full ring-2 ring-green-400 cursor-pointer transition-transform hover:scale-110"
                onClick={() => setOpenUser(!openUser)}
              />
              {/* Tooltip */}
              <div className="absolute w-20 -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "User"}
              </div>
              {openUser && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg p-2">
                  <button
                    className="btn hover:bg-green-700 bg-green-500 rounded-xl w-full text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn hover:bg-[#49A010] btn-sm btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn hover:bg-[#49A010] btn-sm btn-outline">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1D232A] shadow-inner">
          <div className="flex flex-col px-4 py-2">
            {navLinks}
            <div className="mt-2 flex items-center gap-2">
              {user ? (
                <>
                  <img
                    src={user.photo || "https://i.ibb.co/YdLkWjT/user.png"}
                    alt="avatar"
                    className="w-8 h-8 rounded-full ring-2 ring-green-400 cursor-pointer"
                    onClick={() => setOpenUser(!openUser)}
                  />
                  {openUser && (
                    <button
                      className="btn btn-sm bg-green-500 text-white rounded-xl"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn  btn-sm btn-outline whitespace-nowrap"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-sm btn-outline whitespace-nowrap"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
