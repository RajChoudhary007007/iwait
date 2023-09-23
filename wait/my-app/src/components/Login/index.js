import { useState } from "react";
import Cookies from "js-cookie";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import logo from "../../Assest/logo.png";
import "./index.css";

const Login = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  let user = false;

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const onSubmitSuccess = (jwtToken) => {
    const { history } = props;
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    history.replace("/");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { history } = props;
    console.log(userLogin);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        userLogin
      );
      const data = await response.data;
      onSubmitSuccess(data.token);
      console.log("Login successful:", data);
    } catch (error) {
      history.replace("/login");
      console.error("Login error:", error);
    }

    setUserLogin({
      email: "",
      password: "",
    });
  };

  const loginWithGoogle = async(e) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/auth/google"
        // {
        //   headers: {
        //     'Content-Type': 'application/json', // Set the Content-Type header
        //   },
        // }
      );
      console.log(response.data);
      const { history } = props;
      history.replace("/");
    } catch (error) {
      const { history } = props;
      history.replace("/login");
      console.error("Login error:", error);
    }
  };

  if (jwtToken !== undefined) {
    user = true;
  } else {
    user = false;
  }

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="login-main-conatiner">
      <div className="container-fuild">
        <div className="row row-width">
          <div className="backround-image col-md-6">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="login-container col-md-6">
            <h1 className="login-heading">Login</h1>
            <div>
              <hr className="login-line" />
            </div>

            <form className="form-row" onSubmit={submitHandler}>
              <div className="form-group col-md-12">
                <label htmlFor="inputEmail4" className="input-lable">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control user-input"
                  id="email"
                  placeholder="Please enter your email id"
                  name="email"
                  value={userLogin.email}
                  onChange={handlerInput}
                  required
                />
              </div>

              <div className="form-group col-md-12">
                <label htmlFor="inputEmail4" className="input-lable">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control user-input"
                  id="password"
                  placeholder="Please enter password"
                  name="password"
                  value={userLogin.password}
                  onChange={handlerInput}
                  required
                />
              </div>

              <div className="chexck-box-container">
                <div className="form-group col-md-6">
                  <div className="form-check ">
                    <input
                      className="form-check-input input-lable-agrement"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <a href="#" className=" link-save">
                      Save password
                    </a>
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <div className="form-check">
                    <Link to="/forgate" className=" link-save">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <button className="col-md-12 login-button" type="submit">
                Login
              </button>
              <Link to="/registration" className="col-md-12 link">
                New user?
                <Link
                  to="/registration"
                  className="link-span"
                  style={{ margin: "10px" }}
                >
                  Register
                </Link>
              </Link>

              <button type="button" className="col-md-12 fb-button">
                Login with facebook
              </button>

              <button
                type="button"
                className="col-md-12 goog-button"
                onClick={loginWithGoogle}
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
