import { Link } from "react-router-dom";
import "../../sass/faqs/qsat.scss";
const Qsat = () => {
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
          data-bs-target="#faqs_sat1"
        >
          Q: What is the SAT?
        </Link>
        <div className="collapse" id="faqs_sat1">
          <p>
            <span>Answer:</span>The SAT is a standardized test used by colleges
            and universities in the United States to evaluate the academic
            readiness of high school students. The exam measures skills in
            reading, writing, and math.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat2"
        >
          Q: What is the format of the SAT?
        </Link>
        <div className="collapse" id="faqs_sat2">
          <p>
            <span>Answer:</span> The SAT consists of four sections: Reading,
            Writing and Language, Math (with calculator), and Math (without
            calculator). The exam also includes an optional essay.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat3"
        >
          Q: How long does the SAT exam take?
        </Link>
        <div className="collapse" id="faqs_sat3">
          <p>
            <span>Answer:</span> The total testing time for the SAT is 3 hours
            and 50 minutes (including the optional essay).
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat4"
        >
          Q: Do I need to have completed secondary school before taking the SAT
          exam?
        </Link>
        <div className="collapse" id="faqs_sat4">
          <p>
            <span>Answer:</span> No. You don’t need to complete secondary school
            before taking SAT. Most students take the SAT even before the end of
            their secondary education.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat5"
        >
          Q: How is the SAT test scored?
        </Link>
        <div className="collapse" id="faqs_sat5">
          <p>
            <span>Answer:</span> The SAT is scored on a scale of 400-1600, with
            separate scores for the Reading, Writing and Language, and Math
            sections. The optional essay is scored separately.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat6"
        >
          Q: How often can I take the SAT?
        </Link>
        <div className="collapse" id="faqs_sat6">
          <p>
            <span>Answer:</span>You can take the SAT as many times as you like,
            but most students take it two or three times. It is recommended that
            you leave enough time between test dates to allow for preparation
            and improvement.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat7"
        >
          Q: How much does it cost to take the SAT?
        </Link>
        <div className="collapse" id="faqs_sat7">
          <p>
            <span>Answer:</span> The College Board charges standard fees for the
            SAT test for different countries. Therefore, the cost of the IELTS
            exam varies with the exchange rate. Find the prices of all our
            exams, including the SAT, <Link to="/">here</Link>. There are also
            additional fees for services such as rescheduling, changing test
            centers, or score reporting.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat8"
        >
          Q: When should I take the SAT?
        </Link>
        <div className="collapse" id="faqs_sat8">
          <p>
            <span>Answer:</span>
            Most students take the SAT in their junior or senior year of high
            school, but it is recommended that you check with the colleges and
            universities you are interested in to determine their specific
            requirements.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat9"
        >
          Q: How important are SAT scores in the college admissions process?
        </Link>
        <div className="collapse" id="faqs_sat9">
          <p>
            <span>Answer:</span>
            SAT scores are one factor that colleges and universities consider
            when evaluating applications. Other factors, such as grades,
            extracurricular activities, and essays, are also important.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat10"
        >
          Q: Can I prepare for the SAT on my own, or should I take a prep
          course?
        </Link>
        <div className="collapse" id="faqs_sat10">
          <p>
            <span>Answer:</span>
            Many students choose to prepare for the SAT on their own using study
            guides, practice tests, and online resources. However, some students
            find that taking a prep course can be helpful in providing structure
            and support during the preparation process.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat11"
        >
          Q: What types of questions are on the SAT?
        </Link>
        <div className="collapse" id="faqs_sat11">
          <p>
            <span>Answer:</span>
            The SAT includes multiple-choice questions as well as questions that
            require you to write essays and solve problems using critical
            reasoning and analytical skills.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat12"
        >
          Q: Can I bring a calculator to my SAT exam?
        </Link>
        <div className="collapse" id="faqs_sat12">
          <p>
            <span>Answer:</span>
            Yes, you can bring a calculator to the SAT, but it must meet certain
            requirements. Calculators with QWERTY keyboards or those with
            internet access are not allowed.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat13"
        >
          Q: How long should I study for the SAT?
        </Link>
        <div className="collapse" id="faqs_sat13">
          <p>
            <span>Answer:</span>
            The amount of time you need to study for the SAT will depend on your
            individual needs and strengths. Some students study for several
            months, while others may only need a few weeks.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat14"
        >
          Q: What means of identification do I need for the SAT on test date?
        </Link>
        <div className="collapse" id="faqs_sat14">
          <p>
            <span>Answer:</span>A valid international passport is the
            identification document accepted in Nigeria. Expired passports and
            passports that do not match your registration details exactly will
            be rejected. Avoid such errors.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat15"
        >
          Q: Can I cancel my SAT scores?
        </Link>
        <div className="collapse" id="faqs_sat15">
          <p>
            <span>Answer:</span>
            Yes, you can cancel your SAT scores, but you must do so within a few
            days of taking the exam. A fee is charged for this.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_sat16"
        >
          Q: Is the SAT difficult?
        </Link>
        <div className="collapse" id="faqs_sat16">
          <p>
            <span>Answer:</span>
            The difficulty level of the SAT will depend on your individual
            strengths and weaknesses. However, many students find the exam to be
            challenging due to the range of skills it tests and the time
            pressure involved. With adequate preparation and practice, however,
            you can improve your performance on the exam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qsat;
