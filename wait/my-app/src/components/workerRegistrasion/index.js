import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../Assest/logo.png";
import "./index.css";

const WorkerRegistrasion = props => {
  
  const [workerUserRegistration, setworkerUserRegistration] = useState({
    fullName: "",
    applaing: "",
    email: "",
    phone: "",
    door_no: "",
    street_add: "",
    post_code: "",
    city: "",
    state: "",
    country: "",
    about_iwait: "",
    password: "",
    conformPsw: "",
    gender: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setworkerUserRegistration({ ...workerUserRegistration, [name]: value });
  };

  const handelInput = async event => {
    event.preventDefault();
    const data = await axios.post("http://localhost:5000/api/createworker", workerUserRegistration)
    console.log(data);
    if(data.status === 200){
     const {history} = props
     history.replace('/login')
    }
    
    setworkerUserRegistration({
      fullName: "",
      applaing: "",
      email: "",
      phone: "",
      door_no: "",
      street_add: "",
      post_code: "",
      city: "",
      state: "",
      country: "",
      about_iwait: "",
      password: "",
      conformPsw: "",
      gender: "",
    });

  }

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
          <form className="form-row" onSubmit={handelInput}>

            <div className="form-group col-md-6">
              <label htmlFor="fullName" className="input-lable">
                Full Name
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="fullName"
                name="fullName"
                value={workerUserRegistration.fullName}
                onChange={changeHandler}
                placeholder="Please enter your full name "
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="applaing" className="input-lable">
                Job you are applying for
              </label>
              <select
                className="custom-select"
                id="applaing"
                name="applaing"
                value={workerUserRegistration.applaing}
                onChange={changeHandler}
              >
                <option className="user-input" selected>
                  Please select
                </option>
                <option className="user-input" value="1">
                  One
                </option>
                <option className="user-input" value="2">
                  Two
                </option>
                <option className="user-input" value="3">
                  Three
                </option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="email" className="input-lable">
                Email
              </label>
              <input
                type="email"
                className="form-control user-input"
                id="email"
                name="email"
                value={workerUserRegistration.email}
                onChange={changeHandler}
                placeholder="Please enter your email id "
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlfor="phone" className="input-lable">
                Phone number
              </label>
              <input
                type="number"
                className="form-control user-input"
                id="phone"
                name="phone"
                value={workerUserRegistration.phone}
                onChange={changeHandler}
                placeholder="Please enter Phone number"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlfor="door_no" className="input-lable">
                Flat/door number
              </label>
              <input
                type="email"
                className="form-control user-input"
                id="door_no"
                name="door_no"
                value={workerUserRegistration.door_no}
                onChange={changeHandler}
                placeholder="Please enter your country name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlfor="street_add" className="input-lable">
                Street address
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="street_add"
                name="street_add"
                value={workerUserRegistration.street_add}
                onChange={changeHandler}
                placeholder="Please enter your city name"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="post_code" className="input-lable">
                Post code
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="post_code"
                name="post_code"
                value={workerUserRegistration.post_code}
                onChange={changeHandler}
                placeholder="Please enter password"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlfor="city" className="input-lable">
                City
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="city"
                name="city"
                value={workerUserRegistration.city}
                onChange={changeHandler}
                placeholder="********************"
              />
            </div>

            <div className="form-group col-md-6">
              <label for="state" className="input-lable">
                State
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="state"
                name="state"
                value={workerUserRegistration.state}
                onChange={changeHandler}
                placeholder="Please enter your state"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="country" className="input-lable">
                Country
              </label>
              <input
                type="text"
                className="form-control user-input"
                id="country"
                name="country"
                value={workerUserRegistration.country}
                onChange={changeHandler}
                placeholder="Please select your country"
              />
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="about_iwait" className="input-lable">
                How did you hear About IWAIT ?
              </label>
              <select
                className="custom-select"
                id="about_iwait"
                name="about_iwait"
                value={workerUserRegistration.about_iwait}
                onChange={changeHandler}
              >
                <option className="user-input" selected>
                  Drop down options to select
                </option>
                <option className="user-input" value="1">
                  One
                </option>
                <option className="user-input" value="2">
                  Two
                </option>
                <option className="user-input" value="3">
                  Three
                </option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="password" className="input-lable">
                Password
              </label>
              <input
                type="password"
                className="form-control user-input"
                id="password"
                name="password"
                value={workerUserRegistration.password}
                onChange={changeHandler}
                placeholder="Please enter password"
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
                name="conformPsw"
                value={workerUserRegistration.conformPsw}
                onChange={changeHandler}
                placeholder="********************"
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
                  checked={workerUserRegistration.gender === "male"}
                  onChange={changeHandler}
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
                  checked={workerUserRegistration.gender === "female"}
                  onChange={changeHandler}
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
                  checked={workerUserRegistration.gender === "other"}
                  onChange={changeHandler}
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
                  name="gender"
                  id="other"
                  value="other"
                  checked={workerUserRegistration.gender === "other"}
                  onChange={changeHandler}
                />
                <label
                  className="form-check-label input-lable-radio"
                  htmlFor="other"
                >
                  Prefer not to say
                </label>
              </div>
            </div>

            <div className="form-group col-md-12">
              <p className="paragraf-description">
                All the information provided by me are correct, for any wrong
                information I’ll be responsible for the verification process.
              </p>
            </div>

            <div className="form-group col-md-12">
              <div className="form-check">
                <input
                  className="form-check-input input-lable-agrement"
                  type="checkbox"
                  id="gridCheck"
                />
                <a href="#" className="col-md-12 link link-new">
                  I have read and agreed
                  <span className="link-span-agrement">
                    Terms & Conditions
                  </span>
                </a>
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
export default WorkerRegistrasion;
