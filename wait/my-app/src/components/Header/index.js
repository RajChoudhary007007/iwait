import { Link, Redirect, withRouter } from "react-router-dom";

import Cookies from "js-cookie";
import logo1 from "../../Assest/logo1.png";
import "./index.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const onLogout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <div className="header-main-container">
      <div className="header-home">
        <Link className="link" to="/">
          <img className="logo-header" src={logo1} alt="logo" />
        </Link>
        <div className="menu-container">
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              <li className="link">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/home">
                  Work
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/">
                  Link 1
                </Link>
              </li>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Company</button>
            <div className="dropdown-content">
              <li className="link">
                <Link className="link" to="/ourmission">
                  Mission
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/aboutus">
                  Aboutus
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/">
                  Link 1
                </Link>
              </li>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <li className="link">
                <Link className="link" to="/term-conditions">
                  Terms
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/iwaitservies">
                  Iwait
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/ichairservises">
                  Ichair
                </Link>
              </li>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Contact</button>
            <div className="dropdown-content">
              <li className="link">
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Link 1
                </Link>
              </li>
              <li className="link">
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/mywallet-user"
                >
                  Wallet
                </Link>
              </li>
              <li className="link">
                <button
                  className="logout-butn"
                  type="button"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </li>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn back-color">Join Team</button>
            <div className="dropdown-content">
              <li className="link">
                <Link className="link" to="/reaset">
                  Reaset
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/forgate">
                  Forgate
                </Link>
              </li>
              <li className="link">
                <Link className="link" to="/profile">
                  Profile
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
