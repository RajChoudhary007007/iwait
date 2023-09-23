import HeaderAdmin from "../HeaderAdmin";
import SidebarAdmin from "../SidebarAdmin";
import "./index.css";

const LogoutAdmin = () => (
  <>
    <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
      <SidebarAdmin />
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
export default LogoutAdmin;
