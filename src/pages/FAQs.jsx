import {Link, Outlet } from "react-router-dom";
import "../sass/faqs/faqs.scss";


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
