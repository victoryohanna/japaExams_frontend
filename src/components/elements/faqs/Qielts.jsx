import { Link } from "react-router-dom";
import "../../../sass/faqs/qtoefl.scss";

const QIelts = () => {
    return ( 
        <div className="qtoefl-container">
      <p>
        You might be interested in exploring some of these Frequently Asked
        Questions (FAQs) that other applicants have asked us in the past at Japa
        Exams. We hope you find them useful.
      </p>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_toefl1"
        >
          Q: What is the TOEFL exam?
        </Link>
        <div className="collapse" id="faqs_toefl1">
          <p>
            <span>Answer:</span> The TOEFL exam is a standardized test that
            measures the English language proficiency of non-native speakers. It
            tests the four skills of language proficiency: reading, listening,
            speaking, and writing.
          </p>
        </div>
      </div>
      </div>
     );
}
 
export default QIelts;