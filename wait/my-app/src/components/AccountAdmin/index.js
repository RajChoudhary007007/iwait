import AdminWallet from "../AdminWallet";
import HeaderAdmin from "../HeaderAdmin";
import SidebarAdmin from "../SidebarAdmin";

import "./index.css";

const AccountAdmin = () => (
  <>
    <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
        <SidebarAdmin />
        <div className="worker-home-rigth-container">
            <AdminWallet/> 
        </div>
      </div>
    </div>
  </>
)
export default AccountAdmin;
