import { Link } from "react-router-dom";
import "../../sass/services/passports.scss";

const Passports = () => {
  return (
    <div className="passport-container">
      <div className="passport-header">
        <h2>International Passport Processing – Get your passports faster!</h2>
      </div>
      <div className="passport-details ">
        <p>
          If you're planning an international trip or trying to study abroad and
          need a passport, look no further than our international passport
          processing service. We specialize in helping individuals and
          businesses obtain passports quickly and efficiently, so you can focus
          on planning your travels.
        </p>
        <p>
          Our experienced team will guide you through every step of the passport
          application process, from filling out forms to expedited processing
          options. We offer a variety of services to meet your specific needs,
          including first-time passport applications, passport renewals, and
          name changes.
        </p>
        <p>
          One of the main benefits of using our service is that we can save you
          time. In current Nigeria, applying for a passport on your own can take
          weeks or even months, but we have the expertise to get your passport
          to you in a shorter time. We also offer expedited processing options
          if you need your passport even faster.
        </p>
        <p>
          In addition to saving time, using our international passport
          processing service can also save you a lot of hassle. Navigating the
          passport application process can be confusing and frustrating,
          especially if you're not familiar with the requirements. Our team will
          take care of everything, ensuring that your application is complete
          and accurate.
        </p>

        <div className="contactus ">
          <h5>Why Choose US? </h5>
          <p>
            We're committed to providing excellent customer service and have a
            proven track record of success. Our fees are affordable and
            transparent, and we offer a satisfaction guarantee. With our help,
            you'll be ready to explore the world in no time.{" "}
            <Link to="/"> Contact us</Link> today to get started.
          </p>
          <div className="row button-section">
            <div className="col-md-6">
              <Link to="/" type="button" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <Link to="/" type="button" className="btn btn-primary">
                Order for passport processing
              </Link>
            </div>
          </div>
        </div>
        <div className="form-addmission">
          <h5 className="mt-3">Passport Processing Form details</h5>
          <span>
            To start with, complete the form below carefully. A passport
            processing expert will reach out to you once your order is received.
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
                        placeholder="Your full name"
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
                      <label htmlFor="state" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="state"
                        placeholder="Your of origin "
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

export default Passports;
