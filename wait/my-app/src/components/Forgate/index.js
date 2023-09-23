import React, { useState } from "react";

import axios from "axios";

import logo from "../../Assest/logo.png";
import Header from "../Header";

import "./index.css";

const Forgate = props => {
  const [inputEmail, setInputEmail] = useState("");

  const handlerInput = (event) => {
    setInputEmail(event.target.value);
  };

  const onSubmitForm = async event => {
    event.preventDefault(); 
    console.log(inputEmail) 
    try {
      const response = await axios.post("http://localhost:5000/api/forget", {email:inputEmail});
      console.log(response);
      if(response.status === 200){
        const id = response.data.id
        const {history} = props
        history.replace(`/otp/${id}`)
      }
         
    } catch (error) {
      console.error("Error sending the request:", error.message);
    }
  }

  return (
    <>
      <Header />
      <div className="login-main-conatiner">
        <div className="container-fuild">
          <div className="row row-width">
            <div className="backround-image col-md-6">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="login-container col-md-6">
              <h1 className="login-heading">Forgate Password</h1>
              <div>
                <hr className="login-line" />
              </div>

              <form className="form-row" onSubmit={onSubmitForm}>
              <div className=" col-md-12">
                <label htmlFor="email" className="input-lable">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control user-input"
                  id="email"
                  placeholder="Please enter your email id"
                  value={inputEmail}
                  onChange={handlerInput}
                  autoCapitalize="off"
                  required
                />
              </div>

                <button className="col-md-12 reset-button" type="submit">
                  Reset Password
                </button>
                <a href="#" className="col-md-12 link">
                  New user?
                  <span className="link-span" style={{ margin: "10px" }}>
                    Register
                  </span>
                </a>

                <button type="button" className="col-md-12 fb-button">
                  Login with facebook
                </button>

                <button type="button" className="col-md-12 goog-button">
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Forgate;
