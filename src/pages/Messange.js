import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSignOutAlt ,FaList, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { RiUserFill} from 'react-icons/ri';
import { Link } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai"; 
import DashboardMessage from "../component/Messange/DashboardMessage";
const Message = () => {
  const menus = [
    { name: "Dashboard Admin", link: "/dashboardAdmin", icon: MdOutlineDashboard },
    { name: "Profil", link: "/profil", icon: FaUserCircle },
    { name: "Message", link: "/message", icon: FaEnvelope },
    { name: "Create User", link: "/createuser", icon: AiOutlineUserAdd },
    { name: "Create Contact", link: "/contact", icon: RiUserFill },
    { name: "Daftar List User", link: "/daftarListUser", icon: AiOutlineUser },
    { name: "Daftar List Ticket", link: "/daftarListTicket", icon: FaList },
    { name: "Logout", link: "/", icon: FaSignOutAlt },
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${ open ? "w-62" : "w-20" } duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link to={menu?.link} key={i} className={` ${menu?.margin && "mt-5"} group flex items-center text-[12px]  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md sm:text-sm`}>
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 style={{transitionDelay: `${i + 3}00ms`,}} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden" }`}>
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit z-20`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <DashboardMessage/>
    </div>
    </section>
  );
};

export default Message;