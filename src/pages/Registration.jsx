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
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  What type of exams do you want to write?
                </label>
                <select className="form-select" aria-label="">
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
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Where do you want to write your exams?
                </label>
                <select className="form-select" aria-label="">
                  <option>{examType}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Select Date of Examination
                </label>
                <select className="form-select" aria-label="">
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="button_next">
                <button>Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
