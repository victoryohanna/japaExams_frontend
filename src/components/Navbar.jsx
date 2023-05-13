import { Link } from "react-router-dom";

import { GrMail } from "react-icons/gr";
import { TfiTimer } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="top-nav-links container">
        <div>
          <Link to="/" className="navbar-brand">
            Brand
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
                  <span className="email">info@exams.ng</span>
                </div>
              </li>
            </Link>
            <Link>
              <li>
                <span className="quick-links-icon">
                  <TfiTimer />
                </span>
                <div>
                  <span>Openning Time</span>
                  <br />
                  <span className="date">Mon - Sat. 7:30am</span>
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
                  <span className="contact">+2348099992234</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="nav-social-media-links">
          <ul>
            <Link>
              <li>
                <FaTwitter />
              </li>
            </Link>
            <Link>
              <li>
                <FaInstagram />
              </li>
            </Link>
            <Link>
              <li>
                <FaFacebookF />
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="container-fluid navbar-wrapper">
        <nav className=" container navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* <Link to="/" className="navbar-brand">
            Brand
          </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link " aria-current="page">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li> */}
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
                      <Link to="/" className="dropdown-item ">
                        Admission Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Personal Statements
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Score Reporting
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Proof of Fund
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Passport Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Visa Processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Study Abroad Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
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
                      <Link to="/" className="dropdown-item">
                        Join Online Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Join Physical Classes
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Get a Personal Tutor
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/"
                    className="nav-link  dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Resources
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item">Get Study Materials</Link>
                    </li>
                  </ul>
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
                      <Link to="/" className="dropdown-item">
                        Ongoing Scholarships
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Price & Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
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
