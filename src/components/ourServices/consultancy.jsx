
import { Link } from "react-router-dom";
import "../../sass/services/consultancy.scss";

const Consultancy = () => {
  return (
    <div className="consultancy-container">
      <div className="consultancy-details ">
        <div className="consultancy-header">
          <h2>Study Abroad and International Exams – Work with an experienced consultant</h2>
        </div>
        <div className="report-text">
          <p>
          Are you dreaming of studying abroad or taking an international exam, but feeling overwhelmed by the process? Don't worry, we're here to help. Our consultation service is designed to provide you with all the guidance and support you need to make your dreams a reality.

          </p>
          <p>Our team of expert consultants understands that every student has unique needs and aspirations, which is why we take a personalized approach to our services at Japa Exams. We'll work with you to create a customized plan that's tailored to your specific goals and circumstances.

          </p>
          <p>Whether you need help with registering an exam, exam preparation, choosing a school or program, or navigating the passport or visa application process, we've got you covered. Our team will guide you every step of the way, providing you with the knowledge and resources you need to succeed.

          </p>
          <p>One of the key benefits of using our consultation service is that we can save you time and money. We understand that the study abroad and international exam processes can be complex and time-consuming, which is why we're here to streamline the process for you. We'll help you find scholarships and other financial aid options to make your dreams more affordable.

          </p>
          <p>We also provide peace of mind. It's easy to feel overwhelmed when you're facing a daunting challenge like studying abroad or taking an international exam. But with our expert guidance and support, you'll feel confident and fully prepared to tackle whatever comes your way.

          </p>
          <p>We're committed to providing exceptional customer service and have a proven track record of success. Our fees are competitive and transparent, and we offer a satisfaction guarantee. With our help, you'll be well on your way to achieving your dreams.<Link to="/"> Contact us</Link> today to get started. 

          </p>
        </div>
        <div className="form-addmission">
          <h5 className="mt-3">Consultancy Form Details</h5>
          <span>
          Complete the form below. A consultant will reach out to you once your order is received.
          </span>
          <div className="card mt-3">
            <div className="card-body form-card">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
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
                        Email
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
                        placeholder=" "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Proposed country 
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="country"
                        placeholder=" "
                      />
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

export default Consultancy;
