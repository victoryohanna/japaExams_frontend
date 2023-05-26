

import "../../sass/services/sop.scss";

const PersonalStatement = () => {
  return (
    <div className="sop-container">
      <div className="sop-header">
        <h2>Let us craft your personal statement </h2>
        <h5>
          get a competitive personal Statement & statement of purpose that
          stands you out in the crowd
        </h5>
      </div>
      <div className="sop-details ">
        <p>
          Are you applying to graduate school, medical school, law school, or
          any other program? If so, by now you already know that one of the
          important (if not the most important) aspects of your application is
          the personal statement or statement of purpose. This gives you the
          opportunity to showcase your unique qualities, experiences, and
          achievements, and convince the admissions and funding committee that
          you are the best candidate for the program.
        </p>
        <p>
          However, writing a compelling personal statement can be challenging,
          especially if you are not accustomed to writing about yourself. That's
          where our personal statement or statement of purpose service comes in.
          At Japa Exams, We have a team of experienced writers who specialize in
          crafting personalized statements that reflect your individuality and
          impress the admissions and funding committee.
        </p>
        <p>
          Our process starts with a one-on-one consultation with you, where we
          will get to know you, your strengths, and your goals. We will then
          work with you to identify the key points you want to convey in your
          statement and help you structure your writing in a clear and concise
          manner. We understand that every applicant is unique, and that's why
          we do not use templates or generic statements. Instead, we tailor each
          statement to your specific needs and goals, ensuring that it is
          authentic, compelling, and memorable.
        </p>
        <p>
          Our team consists of writers who have years of experience in writing
          personal statements and statements of purpose. They are experts in
          their respective fields and are familiar with the requirements and
          expectations of different graduate and other academic programs.
        </p>
        <p>
          Our service is affordable, and we offer flexible packages to suit your
          budget and timeline. Whether you need help with a single statement or
          multiple applications, we are here to help!
        </p>
        <p>
          At our personal statement or statement of purpose service, we are
          committed to delivering high-quality work that will help you stand out
          from the crowd. With our help, you can confidently submit an
          application that showcases your strengths and convinces the admissions
          committee that you are the best candidate for the program.
        </p>
        <div className="form-addmission">
          <h5 className="mt-3">Personal Statement Form details</h5>
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
                        Phone number:
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
                      <label htmlFor="university" className="form-label">
                        Destination University
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="university"
                        placeholder="University name"
                      />
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
                        placeholder="Your course of study "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="course" className="form-label">
                      Upload CV
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-sm"
                        
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

export default PersonalStatement;
