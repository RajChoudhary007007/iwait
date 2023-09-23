import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import "./index.css";

const Logout = () => (
  <>
    <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
        <Sidebar />
        <div className="worker-home-rigth-container">
            <div className="logout-container-new">
              <p className="log-out-new-cont">Are you sure to Log out your account?</p>
              <button type="button" className="logout-new-btn">Log Out</button>
            </div>
        </div>
      </div>
    </div>
  </>
)
export default Logout;
