import { useState } from "react";
import {useNavigate} from "react-router-dom"

import "../sass/register.scss";
import { data } from "../components/elements";
// import axios from "axios";

const Register = () => {
  const [isAccount, setIsAccount] = useState();
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [examType, setExamType] = useState("");
  const [examCenter, setExamCenter] = useState("");
  const [examDate, setExamDate] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      firstName,
      surName,
      otherName,
      email,
      phoneNumber,
      gender,
      birthDate,
      examType,
      examCenter,
      examDate,
      address,
      isAccount
    };

    console.log(userInfo)
    alert("Your application is successfully Submited")
    navigate("/")
  };

  return (
    <div className="container">
      <div className="form_section">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(e) => setIsAccount(e.target.value)}
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
                      onChange={(e) => setExamType(e.target.value)}
                    >
                      <option> Select</option>
                      {data.map((item, i) => {
                        return <option key={i}>{item.title}</option>;
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
                      onChange={(e) => setExamCenter(e.target.value)}
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
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="surName" className="form-label">
                      SurName
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="surName"
                      onChange={(e) => setSurName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="otherName" className="form-label">
                      Other Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="otherName"
                      onChange={(e) => setOtherName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label=""
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="birthDate" className="form-label">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="birthDate"
                      onChange={(e) => setBirthDate(e.target.value)}
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
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                      onChange={(e) => setExamDate(e.target.value)}
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
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <textarea
                      type="text"
                      className="form-control form-control-sm"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
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
