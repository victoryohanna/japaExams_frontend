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
      <div>
        <h4>Q: What is the IELTS exam?</h4>
        <p>
          The International English Language Testing System (IELTS) is an
          English language proficiency test that is recognized by universities,
          employers, and immigration authorities worldwide.
        </p>
      </div>
      <div>
        <h4>Q: Who takes the IELTS exam?</h4>
        <p>
          People who want to study, work, or live in countries where English is
          the primary language take the IELTS exam. It is typically required for
          university admission, professional registration, and immigration
          purposes.
        </p>
      </div>
      <div>
        <h4>Q: How is the IELTS exam scored?</h4>
        <p>
          The IELTS exam is scored on a scale of 0-9, with 0 being the lowest
          score and 9 being the highest. The overall score is the average of the
          four sections: Listening, Reading, Writing, and Speaking.
        </p>
      </div>
      <div>
        <h4>Q: What is the format of the IELTS exam?</h4>
        <p>
          The IELTS exam consists of four sections: Listening, Reading, Writing,
          and Speaking. The Listening and Reading sections are multiple-choice,
          while the Writing and Speaking sections require written and spoken
          responses.
        </p>
      </div>
      <div>
        <h4>Q: How long does the IELTS exam take?</h4>
        <p>The IELTS exam takes about 2 hours and 45 minutes to complete.</p>
      </div>
      <div>
        <h4>
          Q: What is the difference between the Academic and General Training
          versions of the IELTS exam?
        </h4>
        <p>
          The Academic version of the IELTS exam is designed for people who want
          to study at the undergraduate or postgraduate level in an
          English-speaking country. The General Training version is designed for
          people who want to work or train in an English-speaking country.
        </p>
      </div>
      <div>
        <h4>Q: How is the Speaking section of the IELTS exam conducted?</h4>
        <p>
          The Speaking section of the IELTS exam is conducted as a one-on-one
          interview between the test-taker and an IELTS examiner. It is designed
          to assess the test-taker's ability to communicate in English in a
          variety of situations.
        </p>
      </div>
      <div>
        <h4>Q: How often is the IELTS exam offered?</h4>
        <p>
          The IELTS exam is offered multiple times per month at test centers in
          Nigeria.
        </p>
      </div>
      <div>
        <h4>Q: How do I register for the IELTS exam?</h4>
        <p>You can register for the IELTS exam with us at Japa Exams.</p>
      </div>
      <div>
        <h4>Q: How much does the IELTS exam cost?</h4>
        <p>
          The exam body, British Council, charges standard fees for the IELTS
          test. Therefore, the cost of the IELTS exam varies with the exchange
          rate. Find the prices of all our exams, including the IELTS,{" "}
          <Link to="/">here</Link>. There are also additional fees for services
          such as rescheduling, changing test centers, or score reporting.
        </p>
      </div>
      <div>
        <h4>Q: How long are the scores valid?</h4>
        <p>
          The IELTS scores are valid for two years from the date of the exam.
        </p>
      </div>
      <div>
        <h4>
          Q: What means of identification do I need for the IELTS on test date?
        </h4>
        <p>
          A valid international passport is the identification document accepted
          in Nigeria. Expired passports or passports that do not match your
          registration details exactly will be rejected. Avoid such errors.
        </p>
      </div>
      <div>
        <h4>
          Q: How do I send my IELTS scores to universities or other
          institutions?
        </h4>
        <p>
          You can request that your IELTS scores be sent directly to
          institutions when you register for the exam. You can also request
          additional score reports for a fee.
        </p>
      </div>
      <div>
        <h4>Q: Can I retake the IELTS exam?</h4>
        <p>Yes, you can retake the IELTS exam as many times as you want.</p>
      </div>
      <div>
        <h4>Q: When will I receive my IELTS scores? </h4>
        <p>You will receive your IELTS scores 13 days after the exam.</p>
      </div>
      <div>
        <h4>Q: How do I prepare for the IELTS exam?</h4>
        <p>
          You can prepare for the IELTS exam by practicing with official IELTS
          materials, taking practice tests, and lectures from our experienced
          IELTS tutors at Japa Exams. Got some other questions not listed here
          or other enquiries?  <Link to="/">Contact us here</Link>.
        </p>
      </div>
    </div>
  );
};

export default QIelts;
