import "../../sass/classess/tutorials.scss";
import { exams } from "../elements/index";

const ClassTutorials = () => {
  return (
    <div className="container">
      <div className="header-text">
        <h2>
          Lectures - 5 Reasons to Join Our Tutorial Classes [Physical and
          Online]
        </h2>
      </div>
      <div className="content">
        <p>
          Welcome to Japa Exams lectures and tutorial services! By now, you
          already know that a very good score in international exams like the
          GRE, SAT, GMAT, TOEFL, IELTS, OET, PTE and DUOLINGO is an important
          aspect of your application. Competitive scores on these exams boost
          your chances of admission, funding and immigration success. At Japa
          Exams, we're passionate about helping you succeed in your exam and
          achieve your personal goals.
        </p>
        <p>
          We understand that preparing for these exams can be overwhelming, and
          that's why we're here to provide you with the tailored support and
          guidance you need to excel. Our classes are taught by expert teachers
          who have 8+ years of experience in the field and are dedicated to
          helping you succeed. Our tutors use proven teaching techniques to
          ensure that you fully understand the material and are confident in
          your ability even before test day.
        </p>
        <p>
          Our lectures can be attended physically at our location or virtually
          from the comfort of your own home. We offer both options to provide
          maximum flexibility and convenience for our students. Our physical
          classes provide an immersive learning experience with face-to-face
          interaction with our experienced tutors. On the other hand, our
          virtual classes provide a convenient learning option, allowing you to
          attend from anywhere in the world and study at your own pace.
        </p>
        <ul>
          <h4>
            Here are 5 reasons why you should choose our tutorial services:
          </h4>
          <li>
            1. <span>Affordable:</span> We believe that quality education should
            be accessible to everyone, which is why we offer affordable pricing
            options. You'll receive top-quality teaching at a reasonable price,
            without compromising on the quality of education.
          </li>
          <li>
            2. <span>Personalized attention:</span> We provide personalized
            attention to each student, so you get the support and guidance you
            need to succeed. Our teachers take the time to understand your
            unique needs and tailor their teaching approach accordingly.
          </li>
          <li>
            3. <span>High success rate:</span> Our students have a proven track
            record of achieving their desired scores and reaching their goals.
            We're proud of the success stories we've helped create, and we're
            confident we can help you too
          </li>
          <li>
            4. <span>Comprehensive material:</span> Our classes cover all
            aspects of the exams, including tips and tricks for tackling tricky
            questions. You'll receive comprehensive material and resources that
            will help you master the content and gain confidence in your
            abilities.
          </li>
          <li>
            5. <span>Flexible scheduling:</span> We understand that our students
            have busy schedules, which is why we offer flexible scheduling
            options. You can attend classes at a time that suits you, so you can
            balance your studies with other commitments.
          </li>
        </ul>

        <p>
          Don't let the stress and pressure of these exams hold you back. Join
          our tutorial classes today and start your journey towards success.
          Join a class today and take the first step towards achieving your
          dream score
        </p>
        <div className="form-addmission">
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

export default ClassTutorials;
