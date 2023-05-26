import { Link } from "react-router-dom";
import "../../sass/services/visa.scss";

const Visa = () => {
  return (
    <div className="visa-container">
      <div className="visa-header">
        <h2>Visa Processing – Get your visa without struggle!</h2>
      </div>
      <div className="visa-details ">
        <p>
          Welcome to our visa processing service, where we strive to make your
          visa application process a hassle-free experience. We understand the
          stress and confusion that can come with applying for a visa, which is
          why we are here to assist you every step of the way.
        </p>
        <p>
          Welcome to our visa processing service, where we strive to make your
          visa application process a hassle-free experience. We understand the
          stress and confusion that can come with applying for a visa, which is
          why we are here to assist you every step of the way.
        </p>
        <p>
          Our visa processing service is designed to save you time and effort.
          We offer a range of services to suit your needs, including document
          verification, application submission, and appointment scheduling. We
          also provide personalized assistance to ensure that you are fully
          prepared for your visa interview.
        </p>
        <p>
          At our visa processing service, we pride ourselves on our commitment
          to quality and customer satisfaction. We understand that every visa
          application is unique, which is why we take the time to understand
          your specific requirements and provide tailored solutions that meet
          your needs.
        </p>
        <p>
          We also offer competitive pricing and transparent fees, so you know
          exactly what you are paying for. We believe in providing value for
          money and ensuring that our clients receive the best possible service
          at a reasonable cost.
        </p>

        <div className="contactus ">
          <p>
            If you are planning to travel abroad and require a visa, look no
            further than our visa processing service. Let us take the stress out
            of the process and help you achieve your travel dreams.
            <Link to="/">Contact us</Link> today to learn more about our
            services and how we can assist you with your visa application.
          </p>
        </div>
        <div className="form-addmission">
          <h5 className="mt-3">Visa Processing Form details</h5>
          <span>
            Complete the form below carefully. A visa processing expert will
            reach out to you once your order is received.
          </span>
          <div className="card mt-3">
            <div className="card-body form-card">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="firstName"
                        placeholder="Your first name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="surname" className="form-label">
                        Surname
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="surname"
                        placeholder="Your surname"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="email"
                        placeholder="Your email address"
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
                        placeholder="Your phone number "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Proposed Country
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="country"
                        placeholder="Country "
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

export default Visa;
