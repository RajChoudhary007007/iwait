import React, { useState } from "react";

import axios from "axios";
import Header from "../Header";
import logo from "../../Assest/logo.png";

const ResetPass = ({history}) => {
  const [inputNewPass, setInputNewPass] = useState({
    NewPassword: "",
    ConfirmPassword: "",
  });

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setInputNewPass({ ...inputNewPass, [name]: value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    //console.log(token)
    //console.log(inputNewPass.NewPassword)

    const url = "http://localhost:5000/api/newpassword";

    const headers = {
      'x-auth-token': token,
      "Content-Type": "application/json",
    };

    const requestData = {
      password: inputNewPass.NewPassword,
    };

    try {
      const response = await axios.post(url, requestData, { headers });
      if(response.status === 200){
        history.replace('/login')
      }
      console.log(response);

    } catch (error) {
      console.error("Error sending the request:", error.message);
    }
  };

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
              <h1 className="login-heading">Set Your Password</h1>
              <div>
                <hr className="login-line" />
              </div>

              <p className="sub-paragraph">
                Set your New Password registered mail id, to reset the
                passowrd.Please check your registered email id.
              </p>

              <div className=" col-md-12">
                <label htmlFor="NewPassword" className="input-lable">
                  Enter New Your Password
                </label>
                <input
                  type="password"
                  className="form-control user-input"
                  id="NewPassword"
                  placeholder="Please enter New Password"
                  value={inputNewPass.NewPassword}
                  name="NewPassword"
                  onChange={handlerInput}
                  autoCapitalize="off"
                  required
                />
              </div>

              <div className=" col-md-12" style={{ marginTop: "20px" }}>
                <label htmlFor="ConfirmPassword" className="input-lable">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control user-input"
                  id="ConfirmPassword"
                  placeholder="Please enter Conform Password"
                  value={inputNewPass.ConfirmPassword}
                  name="ConfirmPassword"
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
export default ResetPass;
