import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar"; 
import WorkerMyWallet from '../WorkerMyWallet'
import "./index.css";

const WorkerAccount = () => (
  <>
    <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
        <Sidebar />
        <div className="worker-home-rigth-container">        
            <WorkerMyWallet/>            
        </div>
      </div>
    </div>
  </>
)
export default WorkerAccount;
