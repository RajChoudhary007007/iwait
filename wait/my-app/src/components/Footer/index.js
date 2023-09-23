import { Link } from "react-router-dom";

import logo1 from "../../Assest/logo1.png";
import "./index.css";

const Footer = () => (
  <div className="footer-main-container">
    <div className="foo-background">
      <p className="foo-top-des">
        Leave the waiting hassles behind. Join us today, where we ensure a
        smooth wait for you."
      </p>
      <button className="foo-top-button" type="button">
        Join Team
      </button>
    </div>
    <div className="footer-home">
      <div className="footer-rap">
        <Link to="/howbework" className="item-foo foo-heding">
        <img className="logo-footer" src={logo1} alt="logo" />
        </Link>
        <div className="footer-item">
          <p className="footer-des">
            At iwait, we believe that waiting should be a stress-free experience
          </p>
        </div>
      </div>

      <div className="footer-rap">
        <Link className="item-foo foo-heding" to="/">
          Company
        </Link>
        <Link className="item-foo" to="/">
          Mission
        </Link>
        <Link className="item-foo" to="/">
          How be work
        </Link>
        <Link className="item-foo" to="/">
          Terms & Conditions
        </Link>
      </div>

      <div className="footer-rap">
        <Link className="item-foo foo-heding" to="/">
          Services
        </Link>
        <Link className="item-foo" to="/">
          i Waiter
        </Link>
        <Link className="item-foo" to="/">
          i Chair
        </Link>
        <Link className="item-foo" to="/">
          Terms & Conditions
        </Link>
      </div>

      <div className="footer-rap">
        <Link className="item-foo foo-heding" to="/">
          Company
        </Link>
        <Link className="item-foo" to="/">
          Offer
        </Link>
        <Link className="item-foo" to="/">
          Bloges
        </Link>
        <Link className="item-foo" to="/">
          carrer
        </Link>
      </div>
    </div>
  </div>
);
export default Footer;
