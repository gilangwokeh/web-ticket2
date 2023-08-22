import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BsChevronDown,
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
const Text = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const menus = [
    { title: "DASHBOARD", link: "/" },
    { title: "PAGES", link: "/pages", icon: <AiOutlineFileText /> },
    { title: "MEDIA", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "PROJECTS",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "SUBMENU 1" },
        { title: "SUBMENU 2" },
        { title: "SUBMENU 3" },
      ],
    },
    { title: "INBOX", icon: <AiOutlineBarChart /> },
    { title: "PROFILE", icon: <AiOutlineMail /> },
    { title: "PROFILE", spacing: true, icon: <BsPerson /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  
  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-200 relative`}>
        <FaAngleLeft
          className={`bg-white text-2xl rounded-full absolute -right-3 top-9 border-2 border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
        <div className="inline-flex">
          <AiFillEnvironment className={`bg-amber-300 text-2xl rounded cursor-pointer block float-left mr-2 duration-500 ${ open && "rotate-[360deg]"}`}/>
          <h2 className={`text-white origin-left font-medium text-sm duration-300 ${ !open && "scale-0" }`}>SAAS </h2>
        </div>
        <ul className="pt-2">
          {menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${  menu.spacing ? "mt-9" : "mt-2"} `}>
                <span className="text-sm block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span className={`text-base font-medium flex-1 ${ !open && "hidden"  }`} >
                  {menu.link ? (
                    <Link to={menu.link}>{menu.title}</Link>
                  ) : (
                    menu.title
                  )}
                </span>
                {menu.submenu && open && ( <BsChevronDown className={`duration-300 ${subMenuOpen && "rotate-180"}`} onClick={() => setSubMenuOpen(!subMenuOpen)} />   )}
              </li>
              {menu.submenu && subMenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((menuDropdown, index) => (
                    <li key={index} className="text-gray-300 text-sm flex px-5 items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                      {menuDropdown.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Text;
