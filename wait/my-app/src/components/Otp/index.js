import React, { useState } from "react";

import axios from "axios";
import Header from "../Header";
import logo from "../../Assest/logo.png";


const Otp = ({match, history}) => {
  const [inputOtp, setInputOtp] = useState("");

  const handlerInput = event => {
    setInputOtp(event.target.value)
  }

  const onSubmitForm = async event => {
    event.preventDefault();
    const {id} = match.params
    // console.log(id)
    // console.log(inputOtp)
    try {
      const response = await axios.post(`http://localhost:5000/api/verifyotp/${id}`, {otp:inputOtp});
      console.log(response);
      if(response.status === 200){
        localStorage.setItem('token', `${response.data.token}`);
        history.replace('/reset-pass')
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
              <h1 className="login-heading">Enter Your OTP</h1>
              <div>
                <hr className="login-line" />
              </div>
              <p className="paragraph">Check email for reset link</p>
              <p className="sub-paragraph">
                An otp has been sent to your registered mail id, to reset the
                passowrd.Please check your registered email id.
              </p>

              <div className=" col-md-12">
                <label htmlFor="password" className="input-lable">
                  Enter Your OTP
                </label>
                <input
                  type="password"
                  className="form-control user-input"
                  id="password"
                  placeholder="Please enter your otp"
                  value={inputOtp}
                  onChange={handlerInput}
                  autoCapitalize="off"
                  required
                />
              </div>

              <button type="submit" className=" reset-button">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Otp;
