import { Link } from "react-router-dom";
import "../../../sass/faqs/qgre.scss";
const Qgre = () => {
  return (
    <div className="qgre-container">
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
          data-bs-target="#faqs_gre1"
        >
          Q: What is the GRE?
        </Link>
        <div className="collapse" id="faqs_gre1">
          <p>
            <span>Answer:</span> The GRE (Graduate Record Examination) is a
            standardized test used to assess the readiness of graduate-level
            students for graduate school admissions. The test measures skills in
            verbal reasoning, quantitative reasoning, critical thinking, and
            analytical writing.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre2"
        >
          Q: What is the structure of the GRE?
        </Link>
        <div className="collapse" id="faqs_gre2">
          <p>
            <span>Answer:</span> The GRE consists of three sections: Verbal
            Reasoning, Quantitative Reasoning, and Analytical Writing. Verbal
            Reasoning and Quantitative Reasoning each have two sections, while
            Analytical Writing has one section. The total testing time is about
            3 hours and 45 minutes.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre3"
        >
          Q: How is the GRE scored?
        </Link>
        <div className="collapse" id="faqs_gre3">
          <p>
            <span>Answer:</span> The Verbal Reasoning and Quantitative Reasoning
            sections of the GRE are scored on a scale of 130-170, in one-point
            increments. The Analytical Writing section is scored on a scale of
            0-6, in half-point increments. The scores for each section are
            reported separately.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre4"
        >
          Q: How should I prepare for the GRE?
        </Link>
        <div className="collapse" id="faqs_gre4">
          <p>
            <span>Answer:</span> There are several ways to prepare for the GRE,
            including taking practice tests, reviewing content and strategies,
            and seeking assistance from tutors or study groups. It is
            recommended to start studying at least three months before the test
            date.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre5"
        >
          Q: How often can I take the GRE?
        </Link>
        <div className="collapse" id="faqs_gre5">
          <p>
            <span>Answer:</span> You can take the GRE once every 21 days, up to
            five times within a 12-month period. However, it is recommended to
            allow enough time between test dates to adequately prepare and
            improve your scores.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre6"
        >
          Q: How long are the GRE scores valid?
        </Link>
        <div className="collapse" id="faqs_gre6">
          <p>
            <span>Answer:</span> GRE scores are valid for five years from the
            test date.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre7"
        >
          Q: How do I register for the GRE?
        </Link>
        <div className="collapse" id="faqs_gre7">
          <p>
            <span>Answer:</span> You can register for the GRE online through the
            official website of the Educational Testing Service (ETS). You will
            need to create an account and provide personal information, such as
            your name, contact information, and payment method.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre8"
        >
          Q: How much does it cost to take the GRE?
        </Link>
        <div className="collapse" id="faqs_gre8">
          <p>
            <span>Answer:</span> The exam body, ETS, charges standard fees in
            dollars for the GRE test. Therefore, the cost of the GRE exam varies
            with the exchange rate. Find the prices of all our exams, including
            the GRE, <a href="/"> here</a>. There are also additional fees for
            services such as rescheduling, changing test centers, or score
            reporting.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre9"
        >
          Q: What means of identification do I need for the GRE on test date?
        </Link>
        <div className="collapse" id="faqs_gre9">
          <p>
            <span>Answer:</span> A valid international passport is the
            identification document accepted in Nigeria. Expired passports or
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
          data-bs-target="#faqs_gre10"
        >
          Q: Can I get a fee waiver for the GRE?
        </Link>
        <div className="collapse" id="faqs_gre10">
          <p>
            <span>Answer:</span> Yes, fee waivers are available for eligible
            test takers who demonstrate financial need. To be eligible, you must
            be a U.S. citizen or resident alien, and meet certain income
            guidelines or receive certain types of financial assistance.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre11"
        >
          Q: What is the difference between the GRE General Test and GRE Subject
          Tests?
        </Link>
        <div className="collapse" id="faqs_gre11">
          <p>
            <span>Answer:</span> The GRE General Test measures general skills
            and abilities in verbal reasoning, quantitative reasoning, and
            analytical writing, and is required by most graduate schools. GRE
            Subject Tests measure knowledge in specific subject areas, and are
            often required by certain programs or schools.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre12"
        >
          Q: How long does it take to receive my GRE scores?
        </Link>
        <div className="collapse" id="faqs_gre12">
          <p>
            <span>Answer:</span> Scores for the Verbal Reasoning and
            Quantitative Reasoning sections are available immediately after the
            test, while scores for the Analytical Writing section are typically
            available within 10-15 days. You can view your scores online through
            your ETS account.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre13"
        >
          Q: Can I send my GRE scores to multiple schools?
        </Link>
        <div className="collapse" id="faqs_gre13">
          <p>
            <span>Answer:</span> Yes, you can send your GRE scores to up to four
            graduate programs or business schools for free at the time of the
            test. After that, you can send additional score reports for a fee.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre14"
        >
          Q: Can I cancel my GRE scores?
        </Link>
        <div className="collapse" id="faqs_gre14">
          <p>
            <span>Answer:</span> Yes, you can cancel your GRE scores at the end
            of the test, before viewing them. After that, you can still cancel
            your scores within 72 hours of the test for a fee.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre15"
        >
          Q: What happens if I need to reschedule or cancel my GRE test date?
        </Link>
        <div className="collapse" id="faqs_gre15">
          <p>
            <span>Answer:</span> You can reschedule or cancel your test date for
            a fee that depends on when you make the changes. The closer the date
            to test date, the more expensive it is to change. It is recommended
            that you make all necessary changes as early as possible to avoid
            additional fees or difficulty securing a new test date.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre16"
        >
          Q: Is there a good or passing score for the GRE?
        </Link>
        <div className="collapse" id="faqs_gre16">
          <p>
            <span>Answer:</span> There is no passing or failing score for the
            GRE. The score requirements vary depending on the graduate program
            or school, and the competitiveness of the applicant pool.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre17"
        >
          Q: Are calculators allowed on the GRE?
        </Link>
        <div className="collapse" id="faqs_gre17">
          <p>
            <span>Answer:</span> Yes, a basic on-screen calculator is provided
            during the Quantitative Reasoning sections of the GRE. However,
            personal calculators are not allowed.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre18"
        >
          Q: Can I take the GRE online?
        </Link>
        <div className="collapse" id="faqs_gre18">
          <p>
            <span>Answer:</span> Yes, the GRE General Test is available to take
            online through a secure proctoring system called ProctorU. However,
            not all test takers are eligible for the online option, and there
            may be additional technical requirements and fees. We discourage
            this option in Nigeria because having a hitch-free online GRE test
            requires good internet, stable power and supporting devices which
            are not always available.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre19"
        >
          Q: What accommodations are available for test takers with
          disabilities?
        </Link>
        <div className="collapse" id="faqs_gre19">
          <p>
            <span>Answer:</span> ETS provides accommodations for test takers
            with disabilities or health-related needs, such as extended testing
            time, extra breaks, or assistive technology. To request
            accommodations, you must submit a request and provide documentation
            of your disability or condition.
          </p>
        </div>
      </div>

      <div className="collapse-content">
        <Link
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#faqs_gre20"
        >
          Q: Can I change the schools I sent my scores to after the test?
        </Link>
        <div className="collapse" id="faqs_gre20">
          <p>
            <span>Answer:</span> Yes, we can help send scores and also change
            the schools you sent your scores to for a fee. This will be done
            through your ETS account. Got some other questions not listed here
            or specific enquiries? <a href="/">Contact us here.</a>
          </p>
        </div>
      </div>
      <div className="prep_resources">
        <h5>
          Here are a few links to resources you might find useful in your
          Preparation:
        </h5>
        <ul>
          <li>
            <a href="/">Get our Free GRE study materials</a>
          </li>
          <li>
            <a href="/">Manhattan Sample GRE Test</a>
          </li>
          <li>
            <a href="/">Kaplan Sample GRE Test: External</a>
          </li>
          <li>
            <a href="/">Gruber Sample GRE Test: External</a>
          </li>
          <li>
            <a href="/">Barron Sample GRE Test: External</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Qgre;
