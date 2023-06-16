import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { MdDashboard, MdSettings, MdDelete, MdLogout } from "react-icons/md";

export const MenuItems = [
  {
    title: "Dashboard",  
    path: "/admin",
    icon: <MdDashboard />,
    itemName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    itemName: "nav-text",
  },
  {
    title: "Products",
    path: "/Orders",
    icon: <FaIcons.FaCartPlus />,
    itemName: "nav-text",
  },
  {
    title: "Our Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    itemName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    itemName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <MdLogout/>,
    itemName: "nav-text",
  },
];
