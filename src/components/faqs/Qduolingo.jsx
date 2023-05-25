import { Link } from "react-router-dom";
import "../../sass/faqs/qduolingo.scss";
const Qduolingo = () => {
  return (
    <div className="qduolingo-container">
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
          data-bs-target="#faqs_dou1"
        >
          Q: What is the Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou1">
          <p>
            <span>Answer:</span>
            The Duolingo English Test (DET) is an online-based English
            proficiency test designed for international students. It measures
            your language skills in reading, writing, listening, and speaking.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou2"
        >
          Q: Who accepts the Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou2">
          <p>
            <span>Answer:</span>
            Over 3,000 universities and institutions worldwide accept the
            Duolingo English Test, including many top universities in Canada,
            USA, UK, Australia, China, Japan, Germany, and several others.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou3"
        >
          Q: What are the advantages of taking the Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou3">
          <p>
            <span>Answer:</span>
            The Duolingo English Test is fast, convenient, and more affordable
            compared to other English language proficiency exams like TOEFL and
            IELTS. You can take the test from your home with the help of a
            computer and a webcam. You don’t need to make an appointment ahead
            or even travel to a test centre for the test.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou4"
        >
          Q: How long does the Duolingo English Test take?
        </Link>
        <div className="collapse" id="faqs_dou4">
          <p>
            <span>Answer:</span>
            The Duolingo English Test takes approximately one hour to complete.
            However, the actual time may vary depending on the test-taker's
            performance.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou5"
        >
          Q: What is the format of the Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou5">
          <p>
            <span>Answer:</span>
            The Duolingo English Test is an adaptive test that adjusts the
            difficulty level of the questions based on the test-taker's
            performance. The test consists of four sections: reading, writing,
            listening, and speaking.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou6"
        >
          Q: Can I take a practice test before the actual Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou6">
          <p>
            <span>Answer:</span>
            Yes, Duolingo offers a free practice test that you can take before
            the actual test. The practice test will give you an idea of what to
            expect in the actual test.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou7"
        >
          Q: How much does the Duolingo English Test cost?
        </Link>
        <div className="collapse" id="faqs_dou7">
          <p>
            <span>Answer:</span>
            The Duolingo English Test is quite affordable. Please check our
            pricing page for updated exam fees.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou8"
        >
          Q: How soon can I get my test results?
        </Link>
        <div className="collapse" id="faqs_dou8">
          <p>
            <span>Answer:</span>
            Test results for the Duolingo English Test are available within 48
            hours of completing the test. You can access your results online
            through your Duolingo account.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou9"
        >
          Q: How long are my test results valid?
        </Link>
        <div className="collapse" id="faqs_dou9">
          <p>
            <span>Answer:</span>
            The validity period of the Duolingo English Test score depends on
            the institution or organization that requires it. Some institutions
            accept scores that are up to two years old.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou10"
        >
          Q: Can I retake the Duolingo English Test?
        </Link>
        <div className="collapse" id="faqs_dou10">
          <p>
            <span>Answer:</span>
            Yes, you can retake the Duolingo English Test after a 14-day waiting
            period. However, you can only take the test once per 30-day period.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou11"
        >
          Q: What is the minimum score required to pass the Duolingo English
          Test?
        </Link>
        <div className="collapse" id="faqs_dou11">
          <p>
            <span>Answer:</span>
            The minimum score required to pass the Duolingo English Test depends
            on the institution or organization that requires it. The test does
            not have a pass or fail score.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou12"
        >
          Q: How is the Duolingo English Test scored?
        </Link>
        <div className="collapse" id="faqs_dou12">
          <p>
            <span>Answer:</span>
            The Duolingo English Test is scored on a scale of 10-160, with each
            section scored separately. The scores are then converted to the
            Common European Framework of Reference for Languages (CEFR) scale.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou13"
        >
          Q: Can I take the Duolingo English Test on a mobile device?
        </Link>
        <div className="collapse" id="faqs_dou13">
          <p>
            <span>Answer:</span>
            Yes, you can take the Duolingo English Test on a mobile device using
            the Duolingo app. However, it is recommended to take the test on a
            computer with a webcam and a microphone for a better testing
            experience.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_dou14"
        >
          Q: What if I encounter technical issues during the Duolingo English
          Test?
        </Link>
        <div className="collapse" id="faqs_dou14">
          <p>
            <span>Answer:</span>
            If you encounter technical issues during the Duolingo English Test,
            you can contact the Duolingo support team through the "Contact us"
            link on the Duolingo English Test website. They will help you
            resolve any technical issues that may affect your test performance.
            It is also recommended to test your equipment and internet
            connection before taking the test to avoid any technical issues
            during the test.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qduolingo;
