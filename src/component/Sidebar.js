import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDoorOpen } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSignOutAlt, FaList, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
const Sidebars = ({ onLogout }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpen2, setSubmenuOpen2] = useState(false);
  const [submenuOpen3, setSubmenuOpen3] = useState(false);
  const [submenuOpen4, setSubmenuOpen4] = useState(false);
  const [submenuOpen5, setSubmenuOpen5] = useState(false);
  const [submenuOpen6, setSubmenuOpen6] = useState(false);
  const [submenuOpen7, setSubmenuOpen7] = useState(false);
  const [submenuOpen8, setSubmenuOpen8] = useState(false);
  const [submenuOpen9, setSubmenuOpen9] = useState(false);
  const [submenuOpen10, setSubmenuOpen10] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSubmenu2 = () => {
    setSubmenuOpen2(!submenuOpen2);
  };
  const toggleSubmenu3 = () => {
    setSubmenuOpen3(!submenuOpen3);
  };
  const toggleSubmenu4 = () => {
    setSubmenuOpen4(!submenuOpen4);
  };
  const toggleSubmenu5 = () => {
    setSubmenuOpen5(!submenuOpen5);
  };

  const toggleSubmenu6 = () => {
    setSubmenuOpen6(!submenuOpen6);
  };
  const toggleSubmenu7 = () => {
    setSubmenuOpen7(!submenuOpen7);
  };
  const toggleSubmenu8 = () => {
    setSubmenuOpen8(!submenuOpen8);
  };
  const toggleSubmenu9 = () => {
    setSubmenuOpen9(!submenuOpen9);
  };

  const toggleSubmenu10 = () => {
    setSubmenuOpen10(!submenuOpen10);
  };


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Hapus status autentikasi dari localStorage
    onLogout(); // Panggil fungsi onLogout yang diteruskan dari komponen induk
  };

  return (
    <>
      <div className={`bg-blue-600 ${sidebarOpen ? "overflow-hidden" : ""}`}>
        <span
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div
          className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${
            sidebarOpen ? "" : "hidden"
          }`}
        >
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">SAAS</h1>
              <i
                className={`bi bi-x cursor-pointer ml-28`}
                onClick={toggleSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <Link to="/dashboardAdmin">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i>
                <FaDoorOpen />
              </i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Dashboard
              </span>
            </div>
          </Link>
          <Link to="/profil">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i>
                <FaUserCircle />
              </i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                PROFIL
              </span>
            </div>
          </Link>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                MY CONTENT
              </span>
              <span
                className={`text-sm ${submenuOpen ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search.."
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu2}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                SHARE
              </span>
              <span
                className={`text-sm ${submenuOpen2 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen2 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE CONTACT
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST CONTACT
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu3}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                MESSAGES
              </span>
              <span
                className={`text-sm ${submenuOpen3 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen3 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE PRODUCT
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST PRODUCT
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu4}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
              PRODUCT
              </span>
              <span
                className={`text-sm ${submenuOpen4 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen4 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu5}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
               SUBSCRIPTION
              </span>
              <span
                className={`text-sm ${submenuOpen5 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen5 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu6}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                CONTACT
              </span>
              <span
                className={`text-sm ${submenuOpen6 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen6 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="/contact">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE CONTACT
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu7}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                REPORTS
              </span>
              <span
                className={`text-sm ${submenuOpen7 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen7 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="/createuser">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
            </Link>
            <Link to="/daftarListUser">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu8}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
               SETTINGS
              </span>
              <span
                className={`text-sm ${submenuOpen8 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen8 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
            </Link>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div  className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu9}>
            <i>
              <AiOutlineUserAdd />
            </i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                HELP
              </span>
              <span
                className={`text-sm ${submenuOpen9 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen9 ? "" : "hidden"
            }`}
            id="submenu"
          >
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleSubmenu10}>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                CREATE USER
              </h1>
              <span
                className={`text-sm ${submenuOpen10 ? "rotate-180" : ""}`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </Link>
            </div>
            <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${
              submenuOpen10 ? "" : "hidden"
            }`}
            id="submenu"
          > 
              <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
            </div>
            <Link to="#">
              <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                DAFTAR LIST USER
              </h1>
            </Link>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <Link to="/" onClick={handleLogout}>
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Logout
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
