import { Link, Outlet } from "react-router-dom";
import "../sass/faqs/faqs.scss";

const FAQs = () => {

  return (
    <div className="container">
      <div className="list-menu">
        <p>
          You might be interested in exploring some of these Frequently Asked
          Questions (FAQs) that other applicants have asked us in the past at
          Japa Exams. We hope you find them useful.
        </p>
        <div className="collapse-content">
          <Link
            type="button"
            className="dropdown-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            id='enu'
          >
            Frequently Asked Questions
          </Link>
          <div className="collapse" id="menu">
            <ul>
              <li>
                <Link to="/faqs/gre" >
                  <span>GRE</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/toefl ">
                  <span>TOEFL</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/ielts">
                  <span>IELTS</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/gmat">
                  <span>GMAT</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/sat">
                  <span>SAT</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/oet">
                  <span>OET</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/pte">
                  <span>PTE</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs/duolingo">
                  <span>Duolingo</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="routes-links">
        <h1>Frequently Asked Questions</h1>
        <p>
          You might be interested in exploring some of these Frequently Asked
          Questions (FAQs) that other applicants have asked us in the past at
          Japa Exams. We hope you find them useful.
        </p>
        <ul>
          <li>
            <Link to="/faqs/gre">
              <span>GRE</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/toefl">
              <span>TOEFL</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/ielts">
              <span>IELTS</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/gmat">
              <span>GMAT</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/sat">
              <span>SAT</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/oet">
              <span>OET</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/pte">
              <span>PTE</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs/duolingo">
              <span>Duolingo</span>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default FAQs;
