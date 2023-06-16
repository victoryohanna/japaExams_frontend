import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

import { MdDashboard, MdSettings, MdDelete, MdLogout } from "react-icons/md";
import { FaHome, FaPlus, FaEdit } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="navbar">
        {toggleMenu ? (
          <Link to="/admin" className="menu-bars">
            <AiOutlineClose onClick={() => setToggleMenu(false)} />
          </Link>
        ) : (
          <Link to="/admin" className="menu-bars">
            <FaBars onClick={() => setToggleMenu(true)} />
          </Link>
        )}
      </div>
      {toggleMenu && (
        <div className="nav-menu active scale-up-ver-top">
          <ul className="nav-menu-list">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <MdDashboard /> <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MdSettings />
                <span> Settings</span>
              </Link>
              <ul className="dropdown-men">
                <li className="nav-item">
                  <Link className="dropdown-item" to="/">
                    <FaPlus /> Add Exams
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <FaEdit /> Edit Exams
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <MdDelete /> Remove Exams
                  </Link>
                </li>
              </ul>
            </li>
            <li className="logout">
              <MdLogout />
              <button type="button">LogOut</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
