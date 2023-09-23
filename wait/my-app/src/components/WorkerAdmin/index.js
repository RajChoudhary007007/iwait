import { AiOutlineDelete } from "react-icons/ai";
import HeaderAdmin from "../HeaderAdmin";
import SidebarAdmin from "../SidebarAdmin";

import "./index.css";

const WorkerAdmin = () => (
  <>
    <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
        <SidebarAdmin />
        <div className="worker-home-rigth-container">
          <div className="admin-dashnbord-main-container">
            <div className="admin-dashbord-home-container">
              <div className="card-container">
                <h1 className="admin-heading">Welcome to kids</h1>
                <div className="div-container">
                  <img className="profile" src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1693849552_sugar-1440x700.jpeg" alt="" />
                </div>
                <h2 className="admin-heading">12th of the years</h2>

                <div className="admin-lower">
                  <div className="back-color-div">
                    <h4 className="admin-heading">the years</h4>
                  </div>

                  <div className="back-color-div">
                    <h4 className="admin-heading">the years</h4>
                  </div>

                  <div className="back-color-div">
                    <h4 className="admin-heading">the years</h4>
                  </div>
                </div>
              </div>

              <div className="card-container1">
                <h1 className="admin-heading">Total Worker</h1>
              </div>

              <div className="card-container1">
                <h1 className="admin-heading">Total User</h1>
              </div>

              <div className="card-container1">
                <h1 className="admin-heading">Total income</h1>
              </div>
            </div>
            <h1 className="admin-heading text-align">Worker List</h1>
            <ul className="worker-list-container">
            <input className="worker-item-heading" type="checkbox"/>
                <li className="worker-item-heading" style={{fontWeight:"600"}}>Name</li>
                <li className="worker-item-heading" style={{fontWeight:"600"}}>Work List</li>
                <li className="worker-item-heading" style={{fontWeight:"600"}}>Date of Birth</li>
                <li className="worker-item-heading" style={{fontWeight:"600"}}>Contact</li>
                <li className="worker-item-heading" style={{fontWeight:"600"}}>Action</li>
                
            </ul>

            <ul className="worker-list-container">
                <input className="worker-item-heading" type="checkbox"/>
                <li className="worker-item-heading"> <img className="profile1" src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1693849552_sugar-1440x700.jpeg" alt="" />Raj</li>
                <li className="worker-item-heading">Software Devloper</li>
                <li className="worker-item-heading">2000</li>
                <li className="worker-item-heading">9110189245</li>
                <li className="worker-item-heading"><AiOutlineDelete style={{color:"red"}}/></li>
                
            </ul>

            <ul className="worker-list-container">
                <input className="worker-item-heading" type="checkbox"/>
                <li className="worker-item-heading"><img className="profile1" src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1693849552_sugar-1440x700.jpeg" alt=""/>Raj choudhary</li>
                <li className="worker-item-heading">Software Dev</li>
                <li className="worker-item-heading">2000</li>
                <li className="worker-item-heading">9110189245</li>
                <li className="worker-item-heading"><AiOutlineDelete style={{color:"red"}}/></li>
                 
            </ul>

          </div>
        </div>
      </div>
    </div>
  </>
);
export default WorkerAdmin;
