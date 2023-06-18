import { useState } from "react";

import "../sass/register.scss";
import { data } from "../components/elements";

const Register = () => {
  const [examType, setExamType] = useState();

  return (
    <div className="container">
      <div className="form_section">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row">
              <div className="col-md-12">
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Do you have previous account?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Exam Type?
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=""
                    >
                      <option> Select</option>
                      {data.map((item, i) => {
                        return (
                          <option
                            onChange={(e) => setExamType(e.target.value)}
                            key={i}
                          >
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Exams location?
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=""
                    >
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control form-control-sm" id="firstName" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="surName" className="form-label">SurName</label>
                    <input type="text" className="form-control form-control-sm" id="surName" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="otherName" className="form-label">Other Name</label>
                    <input type="text" className="form-control form-control-sm" id="otherName" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="gender"
                      className="form-label"
                    >
                      Gender
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=""
                    >
                      <option></option>
                      <option value="Female">One</option>
                      <option value="Male">Two</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">Date of birth</label>
                    <input type="date" className="form-control form-control-sm" id="birthDate" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="text" className="form-control form-control-sm" id="phoneNumber" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control form-control-sm" id="email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Exam Date
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=""
                    >
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea type="text" className="form-control form-control-sm" id="address" />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Sumit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
