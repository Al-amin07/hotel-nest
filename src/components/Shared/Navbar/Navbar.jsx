
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Nav.css";
import useType from "../../../hooks/useType";
import img from '../../../assets/images/logo2.png'
const Navbar = () => {
  const [signInMethod] = useType();
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className="nav-link text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-rooms"} className="nav-link text-lg">
          All Rooms
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="nav-link text-lg">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className="nav-link text-lg">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"} className="nav-link text-lg">
          Gallery
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = async() => {
    await logOut()
  }
  return (
    <div className="max-w-7xl z-50 mx-auto">
      <div className="navbar bg-base-100 max-w-7xl z-40 fixed top-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to={"/"}
            className="flex items-center hover:scale-105 gap-2 bg-gradient-to-r from-[#F43F5E] to-[#FF5400] bg-clip-text text-transparent text-2xl font-bold"
          >
            <img className="h-10 w-10" src={img}/>
            Hotel Nest
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6   px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="hidden md:block">
                {user && (
                  <button
                    // onClick={() => setModalOpen(true)}
                    disabled={!user}
                    className="disabled:cursor-not-allowed cursor-pointer bg-neutral-100 hover:bg-neutral-300 py-3 px-4 text-sm font-semibold rounded-full  transition mr-3"
                  >
                    Host your home
                  </button>
                )}
              </div>
              <div className="dropdown dropdown-end mr-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        signInMethod === "password"
                          ? import.meta.env.VITE_API_URL + "/" + user?.photoURL
                          : user?.photoURL
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
                >
                  <li >
                    <Link className="btn btn-sm w-full" to={"/dashboard"}>Dash Board</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="btn btn-sm w-full">Log Out</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to={"/login"}
              className="px-6 hover:scale-105 font-medium text-white py-2 bg-gradient-to-r from-[#F43F5E] to-[#f28499] rounded-sm hover:bg-[#ab3145] "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
