import { Link } from "react-router-dom";
import logo1 from "../../Assest/logo1.png";
import './index.css'

const HeaderAdmin = () => (
    <div className='admin-header-main-cont'>
       <Link className="link" to="/">
          <img className="logo-header" src={logo1} alt="logo" />
        </Link>
    </div>
)
export default HeaderAdmin