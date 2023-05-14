import { Link } from "react-router-dom";
import image from "../../assets/process.jpg";
import '../../sass/services/admissions.scss'

const AdmissionProcessing = () => {
  return (
    <div className="admissions-container">
      <div className="admissions-header">
        <h2>Admission Processing Service </h2>
        <h5>
          [School Search, Document Review, Application Review, Consultation]
        </h5>
      </div>
      <div className="admissions-details ">
        <p>
          Are you tired of the complicated and time-consuming process of
          admission applications? Do you want to focus on the more important
          aspects of your academic journey, like preparing for exams or simply
          have time for other extracurricular activities? If so, our admission
          processing service can help.
        </p>
        <p>
          Our team of experienced professionals with over 10 years of experience
          in undergraduate and post-graduate admissions will guide you through
          the entire admission process, from start to finish. We know that each
          school has its unique requirements and application processes, and our
          experts will help you navigate these complexities with ease. Our goal
          is to make the admission process as smooth and stress-free as possible
          for our clients
        </p>
        <p>
          We offer a comprehensive suite of services to ensure that you put your
          best foot forward. Our services include consultation, document
          verification, editing, and application submission. We will also keep
          you informed about the status of your application and provide updates
          as necessary every inch of the way.
        </p>
        <p>
          Our team is committed to delivering quality services that meet your
          specific needs. We understand that every student is different, and we
          will work with you to create a personalized plan that suits your
          academic goals and preferences.
        </p>
        <p>
          With our admission processing service, you can save time and focus on
          what matters most. Whether you're applying to a top-tier university, a
          community college, or a vocational school, we've got you covered.
        </p>
        <h5>Our Process</h5>
        <div className="image-section">
          <img src={image} alt="our process" />
        </div>
        <div className="choose-us">
          <h5>Why Choose Us</h5>
          <p>
            Our team is made up of professionals who have over 10 years of
            experience in admissions and education. We understand the admission
            process, and we know what universities are looking for in
            prospective students. We are committed to providing personalized
            service and support to each of our clients, and we pride ourselves
            on our attention to detail and our commitment to excellence.
          </p>
          <p>
            So why wait? Contact us today to learn more about our admission
            processing services and how we can help you achieve your academic
            dreams. Let us take care of the details while you focus on your
            future.
          </p>
        </div>
        <div className="contactus ">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" type="button" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <Link to="/" type="button" className="btn btn-primary">
                Order Admission Services
              </Link>
            </div>
          </div>
        </div>
        <div className="form-addmission">
          <h5 className="mt-3">Admission Request Form details</h5>
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
                      <label htmlFor="fullName" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="fullName"
                        placeholder="Your full name"
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
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="passport" className="form-label">
                        Do you have a valid International Passport?
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Destination country
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                      >
                        <option>Please select</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Canada</option>
                        <option>Australia</option>
                        <option>Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="program" className="form-label">
                        Destination Program Type
                      </label>
                      <select
                        className="form-select form-select-sm"
                        aria-label="Default select"
                        
                      >
                        <option>Please select</option>
                        <option>Undergraduate</option>
                        <option>M.Sc</option>
                        <option>PhD</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="course" className="form-label">
                        Proposed course of study
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="course"
                        placeholder="What course do you intend to study"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor="previousExamsTaken"
                        className="form-label"
                      >
                        List any international exams you have taken
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="previousExamsTaken"
                        placeholder="e.g GRE, SAT and TOEFL"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-submit d-flex justify-content-end ">
                  <button type="button" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcessing;
