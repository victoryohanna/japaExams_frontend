
import "../../sass/services/fund.scss";

const ProofOfFund = () => {
  return (
    <div className="fund-container">
      <div className="fund-header">
        <h2>Proof of Fund Service: Study Abroad or Immigration</h2>
        
      </div>
      <div className="fund-details ">
        <p>
          Are you planning to study abroad or immigrate to another country, but
          need to show proof of funds? Our proof of funds service can help.
        </p>
        <p>
          At Japa Exams, we understand that one of the most important
          requirements for studying abroad or immigrating to another country is
          showing proof of funds. Our proof of funds service is designed to help
          you meet this requirement and show that you have the necessary funds
          to support yourself during your stay abroad.
        </p>
        <p>
          With our proof of funds service, you can get a certified letter or
          bank statement that shows you have the necessary funds to support your
          education or immigration. We work with reputable financial
          institutions to provide you with the documentation you need to satisfy
          the financial requirement for your visa application.
        </p>
        <p>
          Our process is simple and straightforward. All you have to do is
          provide us with the required documentation, and we will handle the
          rest. We understand the urgency of your application, and we work
          quickly to ensure that you receive your proof of funds documentation
          in a timely manner.
        </p>
        <p>
          Our team of experienced professionals is dedicated to providing you
          with exceptional service and support throughout the process. We
          understand the importance of your application and will work with you
          to ensure that you have everything you need to succeed.
        </p>
        <p>
          Don't let the financial requirement hold you back from achieving your
          dreams of studying abroad or immigrating to another country. Contact
          us today to learn more about our proof of funds service and how we can
          help you achieve your goals.
        </p>
        <div className="form-addmission">
          <h5 className="mt-3">Proof of Funds Form</h5>
          <span>
            Complete the form below carefully. An admission processing expert
            will reach out to you once your order is received.
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
                        Amount Needed:
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
                      <label htmlFor="program" className="form-label">
                        Purpose
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        <option>Study Abroad</option>
                        <option>Immigration</option>
                        <option>Others</option>
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

export default ProofOfFund;
