import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFillHouseAddFill, BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";
import img from "../../../assets/images/logo2.png";
import useRole from "../../../hooks/useRole";
import GuestMenu from "./GuestMenu";
import HostMenu from "./HostMenu";
import AdminMenu from "./AdminMenu";
import ToggleBtn from "./ToggleBtn";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [role, isLoading] = useRole();
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(true);
  // console.log(role)
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleLogOut = async () => {
    await logOut()
    navigate('/')

  }

  const toggleHandler = (selected) => {
    setToggle(selected);
  };
  if (isLoading) return <LoadingSpinner />;
  // console.log(toggle)
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link
                to={"/"}
                className="flex items-center hover:scale-105 gap-2 bg-gradient-to-r from-[#F43F5E] to-[#FF5400] bg-clip-text text-transparent text-2xl font-bold"
              >
                <img className="h-10 w-10" src={img} />
                Hotel Nest
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}
            {role === "host" && (
              <ToggleBtn toggleHandler={toggleHandler} toggle={toggle} />
            )}
            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                end
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>

              {role === "guest" && <GuestMenu />}
              {role === "host" ? (
                toggle ? (
                  <HostMenu />
                ) : (
                  <GuestMenu />
                )
              ) : undefined}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
