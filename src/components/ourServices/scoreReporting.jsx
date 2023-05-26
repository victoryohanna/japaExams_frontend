
import "../../sass/services/reportScore.scss";

const ReportScores = () => {
  return (
    <div className="scoreReport-container">
      <div className="scoreReport-details ">
        <div className="scoreReport-header">
          <h2>SEND YOUR TEST SCORES TO UNIVERSITIES</h2>
        </div>
        <div className="report-text">
          <p>
            JapaExams provides a quick and easy way to send your standardized
            exam scores to the institutions of your choice. With just a few
            clicks, you can request to send your scores directly to universities
            and colleges around the world. No more waiting for postal delivery
            or dealing with complicated paperwork. Take control of your
            application process and send your scores hassle-free with our secure
            and reliable score sending service.
          </p>
        </div>
        <div className="form-addmission">
          <h5 className="mt-3">Score Reporting Form </h5>
          <span>
            Complete the form below to send your scores to a university, college
            or other institutions.
          </span>
          <div className="card mt-3">
            <div className="card-body form-card">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="examType" className="form-label">
                        Exam Type
                      </label>
                      <select
                        type="text"
                        className="form-select form-select-sm"
                        id="firstName"
                        placeholder=""
                      >
                        <option value="">Select Exam</option>
                        <option value="">GRE</option>
                        <option value="">GMAT</option>
                        <option value="">IELTS</option>
                        <option value="">TOEFL</option>
                        <option value="">OET</option>
                        <option value="">SAT</option>
                        <option value="">PET</option>
                        <option value="">Duolingo</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="institution" className="form-label">
                        Institution Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="institution"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="code" className="form-label">
                        Institution GRE code
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="code"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="program" className="form-label">
                        Department or Program GRE code
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="program"
                        placeholder=" "
                      />
                    </div>
                  </div>
                  <div className="delivery-info">
                    <span>
                      We will use this to send you updates on the delivery of
                      your scores
                    </span>
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
                </div>
                <div className="form-submit d-flex justify-content-end ">
                  <button type="button" className="btn btn-primary">
                    Send Score
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

export default ReportScores;
