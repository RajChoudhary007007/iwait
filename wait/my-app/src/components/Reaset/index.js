import React, { useState } from "react";

import axios from "axios";
import Header from "../Header";
import logo from "../../Assest/logo.png";
import "./index.css";

const Reaset = props => {
  const [inputEmail, setInputEmail] = useState("");

  const handlerInput = event => {
    setInputEmail(event.target.value)
  }

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
            <form className="login-container col-md-6" onSubmit={onSubmitForm}>
              <h1 className="login-heading">Forgate Password</h1>
              <div>
                <hr className="login-line" />
              </div>
              <p className="paragraph">Check email for reset link</p>
              <p className="sub-paragraph">
                An email has been sent to your registered mail id, to reset the
                passowrd.Please check your registered email id.
              </p>

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

              <button type="submit" className=" reset-button">
                Reaset
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reaset;
