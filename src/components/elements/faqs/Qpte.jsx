import { Link } from "react-router-dom";
import "../../../sass/faqs/qpte.scss";
const Qpte = () => {
  return (
    <div className="qsat-container">
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
          data-bs-target="#faqs_pte1"
        >
          Q: What is the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte1">
          <p>
            <span>Answer:</span>
            The PTE Exam is an English language proficiency test that assesses a
            person's ability to use English in academic and real-life contexts.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte2"
        >
          Q: What is the format of the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte2">
          <p>
            <span>Answer:</span>
            The PTE Exam is a computer-based test that assesses four language
            skills: speaking, writing, reading, and listening. It consists of
            multiple-choice questions, essays, and spoken responses.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte3"
        >
          Q: What is the duration of the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte3">
          <p>
            <span>Answer:</span>
            The PTE Exam lasts for 3 hours.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte4"
        >
          Q: How is the PTE Exam scored?
        </Link>
        <div className="collapse" id="faqs_pte4">
          <p>
            <span>Answer:</span>
            The PTE Exam is scored on a scale of 10-90, with 90 being the
            highest score.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte5"
        >
          Q: How long does it take to receive PTE Exam results?
        </Link>
        <div className="collapse" id="faqs_pte5">
          <p>
            <span>Answer:</span>
            PTE Exam results are usually available within 2-5 days of taking the
            test.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte6"
        >
          Q: How much does it cost to take the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte6">
          <p>
            <span>Answer:</span>
            The cost of the PTE Exam varies depending on the exchange rate.
            Check our <Link to="/">pricing page</Link> for fees
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte7"
        >
          Q: Can I take the PTE Exam multiple times?
        </Link>
        <div className="collapse" id="faqs_pte7">
          <p>
            <span>Answer:</span>
            Yes, you can take the PTE Exam as many times as you want. However,
            you must wait at least 5 days before retaking the exam.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte8"
        >
          Q: Is the PTE Exam accepted by universities and employers?
        </Link>
        <div className="collapse" id="faqs_pte8">
          <p>
            <span>Answer:</span>
            Yes, the PTE Exam is accepted by thousands of universities and
            employers worldwide as proof of English language proficiency.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte9"
        >
          Q: Can I take the PTE Exam online?
        </Link>
        <div className="collapse" id="faqs_pte9">
          <p>
            <span>Answer:</span>
            Yes, you can take the PTE Exam online from the comfort of your home
            using a computer and a reliable internet connection.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte10"
        >
          Q: What is the validity of the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte10">
          <p>
            <span>Answer:</span>
            The validity of the PTE Exam is usually 2 years from the date of
            taking the test.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte11"
        >
          Q: How do I prepare for the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte11">
          <p>
            <span>Answer:</span>
            You can prepare for the PTE Exam by practicing your English language
            skills, taking practice tests, and familiarizing yourself with the
            test format and question types.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte12"
        >
          Q: Is there a passing score for the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte12">
          <p>
            <span>Answer:</span>
            There is no passing score for the PTE Exam. Each institution sets
            its own minimum score requirements for admission or employment.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte13"
        >
          Q: Can I use a dictionary during the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte13">
          <p>
            <span>Answer:</span>
            No, you are not allowed to use a dictionary during the PTE Exam.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte14"
        >
          Q: Can I request a re-evaluation of my PTE Exam score?
        </Link>
        <div className="collapse" id="faqs_pte14">
          <p>
            <span>Answer:</span>
            Yes, you can request a re-evaluation of your PTE Exam score for an
            additional fee.
          </p>
        </div>
      </div>
      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_pte15"
        >
          Q: Is there a time limit for each section of the PTE Exam?
        </Link>
        <div className="collapse" id="faqs_pte15">
          <p>
            <span>Answer:</span>
            Yes, there is a time limit for each section of the PTE Exam. You
            must complete each section within the allotted time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qpte;
