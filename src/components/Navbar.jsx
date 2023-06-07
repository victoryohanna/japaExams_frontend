import { Link } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import brand from "../assets/brand.png";

import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="top-nav-links container">
        <div className="brand_section">
          <Link to="/" className="navbar-brand">
            <img src={brand} alt="brand" />
          </Link>
        </div>
        <div className="nav-quick-links">
          <ul>
            <Link>
              <li>
                <span className="quick-links-icon">
                  <GrMail />
                </span>
                <div>
                  <span>Mail Us</span>
                  <br />
                  <span className="email">info@japaexams.com</span>
                </div>
              </li>
            </Link>
            <Link>
              <li>
                <span className="quick-links-icon">
                  <MdCall />
                </span>
                <div>
                  <span>Call/WhatsApp</span>
                  <br />
                  <span className="contact">+2348066090867</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="container-fluid navbar-wrapper">
        <nav className=" container navbar navbar-expand-lg navbar-body">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand navbar-mobile">
              <img src={brand} alt="brand" className="" />
            </Link>
            <button
              className="navbar-toggler fff"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon toggle-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse nav-collapse "
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Exams
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/gre" className="dropdown-item">
                        GRE
                      </Link>
                    </li>
                    <li>
                      <Link to="/toefl" className="dropdown-item">
                        TOEFL
                      </Link>
                    </li>
                    <li>
                      <Link to="/ielts" className="dropdown-item">
                        IELTS
                      </Link>
                    </li>
                    <li>
                      <Link to="/gmat" className="dropdown-item">
                        GMAT
                      </Link>
                    </li>
                    <li>
                      <Link to="/sat" className="dropdown-item">
                        SAT
                      </Link>
                    </li>
                    <li>
                      <Link to="/oet" className="dropdown-item">
                        OET
                      </Link>
                    </li>
                    <li>
                      <Link to="/pte" className="dropdown-item">
                        PTE
                      </Link>
                    </li>
                    <li>
                      <Link to="/duolingo" className="dropdown-item">
                        Duolingo
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/services/admissions"
                        className="dropdown-item "
                      >
                        Admission Processing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/personal-statements"
                        className="dropdown-item"
                      >
                        Personal Statements
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/score-reporting"
                        className="dropdown-item"
                      >
                        Score Reporting
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/proof-fund" className="dropdown-item">
                        Proof of Fund
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/passports" className="dropdown-item">
                        Passport Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/visa" className="dropdown-item">
                        Visa Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/" className="dropdown-item">
                        Study Abroad Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consultancy"
                        className="dropdown-item"
                      >
                        Consultancy
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lectures & Training
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/tutorials" className="dropdown-item">
                        Join Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/tutors" className="dropdown-item">
                        Get a Personal Tutor
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <Link to="/materials" className="nav-link  ">
                    Study Materials
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Scholarships
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/scholarships" className="dropdown-item">
                        Ongoing Scholarships
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="dropdown-item">
                        Price & Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/faqs" className="nav-link ">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
