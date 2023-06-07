import "../../sass/classess/personalTutor.scss";
import { exams } from "../elements/index";

const PersonalTutor = () => {
  return (
    <div className="container">
      <div className="header-text">
        <h2>Lectures – Get a Personal Tutor [Physical & Online]</h2>
      </div>
      <div className="content">
        <p>
          Welcome to our one-of-a-kind personal tutor service, where we
          understand that every student has unique learning needs and deserves
          personalized attention to achieve their desired scores in exams like
          the GRE, TOEFL, GMAT, SAT, OET, PTE, Duolingo, and more.
        </p>
        <p>
          We know from experience that studying for these exams can be
          overwhelming and stressful, which is why our experienced tutors are
          committed to providing you with the support and guidance you need to
          excel. With our personal tutor service, you can get the following:
        </p>
        <ul>
          <li>
            1. <span>One-on-one Attention:</span> Our personal tutor service provides you
            with one-on-one attention that you won't find in a classroom
            setting. You'll receive individualized feedback, and your tutor will
            work with you to improve your weak areas and help you achieve your
            goals.
          </li>
          <li>
            2. <span>Tailored Learning Experience:</span> We believe that every student is
            unique, and so are their learning needs. Our tutors will work with
            you to create a customized learning plan that is tailored to your
            specific requirements. They will take the time to understand your
            learning style, strengths, and weaknesses, and create a plan that
            works best for you.
          </li>
          <li>
            3. <span>Flexibility:</span> We understand that life can be hectic, and that's
            why we offer flexible scheduling options. You can schedule your
            tutoring sessions at a time that is convenient for you. You can
            choose to have a regular schedule or opt for more flexible sessions.
          </li>
          <li>
            4. <span>Affordable Pricing:</span> We believe that quality education should be
            accessible to everyone, and our pricing reflects this philosophy. We
            offer affordable pricing options, without compromising on the
            quality of education.
          </li>
          <li>
            5. <span>Expert Tutors:</span> Our tutors are experts in their respective fields
            and have over 8 years of experience in teaching. They use the latest
            teaching techniques and methodologies to help you achieve your
            goals. We have a rigorous selection process for our tutors, ensuring
            that you receive top-quality teaching.
          </li>
        </ul>
        <p>
          We're committed to helping you achieve your goals and succeed in your
          exams. Our personal tutor service will provide you with the support,
          guidance, and expertise you need to achieve your desired scores. Don't
          wait any longer, start your journey towards success today by signing
          up for our personal tutor service.
        </p>
        <div className="form-personal_tutor">
          <h5 className="mt-3">Tutorials Form details</h5>
          <span>
            Submit the form below to join a class. Our agent will contact you
            once your order is confirmed.
          </span>
          <div className="card mt-3">
            <div className="card-body form-card">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="fullName"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="email"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="phoneNumber"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="exams" className="form-label">
                        Exams Type
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        {exams.map((item) => {
                          return <option key={item.id}>{item.achronym}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="lecture" className="form-label">
                        Lecture Type
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        <option>Physical Classes</option>
                        <option>Online Classes</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="period" className="form-label">
                        Preferred Lecture Period
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        <option>Weekdays</option>
                        <option>Weekends</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-submit d-flex justify-content-end ">
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTutor;
