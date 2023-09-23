import { Link } from "react-router-dom";
import logo1 from "../../Assest/logo1.png";
import Alarm from "../../Assest/Alarm.png";
import MaleUser from "../../Assest/MaleUser.png";

import "./index.css";

const ProHeader = () => (
  <div className="ProHeader-main-container">
    <div className="ProHeader-home">
      <div className="ProHeader-rap">
        <Link to="/" className="item-foo foo-heding">
          <img className="logo-footer" src={logo1} alt="logo" />
        </Link>
      </div>

      <div className="ProHeader-rap">
        <Link className="item-foo foo-heding" to="/">
        My Jobs
        </Link>
      </div>

      <div className="ProHeader-rap">
        <Link className="item-foo foo-heding" to="/">
        Reports
        </Link>
      </div>

      <div className="ProHeader-rap">
        <Link className="item-foo foo-heding" to="/">
        Messages
        </Link>
      </div>

      <div className="ProHeader-rap">
        <Link className="item-foo foo-heding" to="/">
        <img className="logo-pro" src={Alarm} alt="logo" />
        </Link>
      </div>

      <div className="ProHeader-rap">
        <Link className="item-foo foo-heding" to="/">
        <img className="logo-pro-male" src={MaleUser} alt="logo" />
        </Link>
      </div>

    </div>
  </div>
)
export default ProHeader;
