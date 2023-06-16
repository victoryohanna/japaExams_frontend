import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "../../sass/admin/sideMenu.scss";

import { MdDashboard, MdSettings, MdDelete, MdLogout } from "react-icons/md";
import { FaHome, FaPlus, FaEdit } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="side-menu">
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
                <FaHome style={{ margin: 5 }} />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <MdDashboard style={{ margin: 5 }} /> <span>Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaPlus style={{ margin: 5 }} /> <span>Add Exam</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <MdSettings style={{ margin: 5 }} /> <span>Setting</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/" className="dropdown-item">
                    <FaEdit style={{ margin: 5 }} />
                    <span>Edit Exam</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    <MdDelete
                      style={{ margin: 1, fontSize: 35, color: "red" }}
                    />{" "}
                    <span>Delete Exam</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="logout">
              <MdLogout style={{ margin: 5 }} />
              <button type="button">LogOut</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
