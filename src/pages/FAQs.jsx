import {Link, Outlet } from "react-router-dom";
import "../sass/faqs.scss";


const FAQs = () => {
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="routes-links">
        <ul>
          <li>
            <Link to="/faqs/gre">
              <span>GRE</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>TOEFL</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>IELTS</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>GMAT</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>SAT</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>OET</span>
            </Link>
          </li>
          <li>
            <Link>
              <span>PTE</span>
            </Link>
          </li>
          <li>
            <Link>
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
