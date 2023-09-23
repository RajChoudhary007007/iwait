import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../Assest/logo.png";
import "./index.css";


const Registration = props => {

  const [userRegistration, setUserRegistration] = useState({
    fullName: "",
    position: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    password: "",
    conformPsw: "",
    gender: "",
  });


  const handlerInput = (event) => {
    const { name, value } = event.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
     const data = await axios.post("http://localhost:5000/api/createuser", userRegistration)
     console.log(data);
     if(data.status === 200){
      const {history} = props
      history.replace('/login')
     }else{
      const {history} = props
      history.replace('/registration')
      console.log(data.message);
     }

    setUserRegistration({
      fullName: "",
      position: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      password: "",
      conformPsw: "",
      gender: "",
    });
  };

  return (
    <div className="resgister-main-container">
      <div className="resgister-home">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="join-team">
          <h1 className="join-heading">Join Team</h1>
          <hr className="hr-line" />
        </div>
        <div className="container-fuild form-item">
          <form className="form-row" onSubmit={handleSubmit}>
            <div className="form-group col-md-6">
              <label htmlFor="fullName" className="input-lable">
                Full Name
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="fullName"
                placeholder="Please enter your full name "
                name="fullName"
                value={userRegistration.fullName}
                onChange={handlerInput}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="position" className="input-lable">
                Position you are applying
              </label>
              <select
                className="custom-select"
                value={userRegistration.position}
                onChange={handlerInput}
                required
                id="position"
                name="position"
              >
                <option value="">Please select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" className="input-lable">
                Email
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="email"
                placeholder="Please enter your email id "
                name="email"
                value={userRegistration.email}
                onChange={handlerInput}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone" className="input-lable">
                Phone number
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="phone"
                placeholder="Please enter Phone number"
                name="phone"
                value={userRegistration.phone}
                onChange={handlerInput}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="country" className="input-lable">
                Country
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="country"
                placeholder="Please enter your country name"
                name="country"
                value={userRegistration.country}
                onChange={handlerInput}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="city" className="input-lable">
                City
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="city"
                placeholder="Please enter your city name"
                name="city"
                value={userRegistration.city}
                onChange={handlerInput}
                required
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="password" className="input-lable">
                Password
              </label>
              <input
                type="password"
                className="form-control user-input"
                id="password"
                placeholder="Please enter password"
                name="password"
                value={userRegistration.password}
                onChange={handlerInput}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="conformPsw" className="input-lable">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control user-input"
                id="conformPsw"
                placeholder="********************"
                name="conformPsw"
                value={userRegistration.conformPsw}
                onChange={handlerInput}
                required
              />
            </div>

            <div className="col-md-12">
              <h2 className="gender">Gender</h2>
            </div>
            <div className="form-group col-md-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={userRegistration.gender === "male"}
                  onChange={handlerInput}
                  required
                />
                <label
                  className="form-check-label input-lable-radio"
                  htmlFor="male"
                >
                  Male
                </label>
              </div>
            </div>

            <div className="form-group col-md-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={userRegistration.gender === "female"}
                  onChange={handlerInput}
                  required
                />
                <label
                  className="form-check-label input-lable-radio"
                  htmlFor="female"
                >
                  Female
                </label>
              </div>
            </div>

            <div className="form-group col-md-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={userRegistration.gender === "other"}
                  onChange={handlerInput}
                  required
                />
                <label
                  className="form-check-label input-lable-radio"
                  htmlFor="other"
                >
                  Other
                </label>
              </div>
            </div>

            <div className="form-group col-md-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gridCheck"
                  name="gender"
                  value="other"
                  checked={userRegistration.gender === "other"}
                  onChange={handlerInput}
                  required
                />
                <label
                  className="form-check-label input-lable-radio"
                  htmlFor="gridCheck"
                >
                  Prefer not to say
                </label>
              </div>
            </div>

            <button className="col-md-12 sub-button" type="submit">
              Join Team
            </button>

            <a href="#" className="col-md-12 link">
              <p className="link-new">
                Already have an accunt?
                <Link to="/login" className="link-span">
                  Login
                </Link>
              </p>
            </a>
          </form>
        </div> 
      </div>
    </div>
  );
};
export default Registration;
