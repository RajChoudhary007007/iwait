
import { AiOutlineMenu } from "react-icons/ai";
import { VscBell } from "react-icons/vsc";
import { FcPortraitMode } from "react-icons/fc";
import tranction from '../../Assest/tranction.png'
import "./index.css";

const AdminWallet = () => (
  <>   
    <div className="worker-wllet-main-container">
      <div className="bg-color">
        <div className="heder-wallet-container">
          <div className="worker-heding-wallet-cont">
            <h1>
              <AiOutlineMenu style={{ color: "rgb(64, 64, 150)" }} />
            </h1>
            <h1 className="wallet-heading">My Wallet</h1>
          </div>
          <h1>
            <VscBell style={{ color: "rgb(64, 64, 150)" }} />
          </h1>
        </div>

        <div className="wallet-card-container ">
          <div className="wallet-user-head">
            <h3 style={{ color: "#000" }}>Admin-Bank</h3>
            <h1>
              <FcPortraitMode />
            </h1>
          </div>
          <div className="amount-wallet">
            <h3 style={{ color: "rgb(64, 64, 150)" }}>Amount: $5500</h3>
            <h5 className="dis">.... .... .... 4538</h5>
          </div>
        </div>

        <div className="transaction-history">
            <h3 className="transction-his">Transaction</h3>
            <div className="transaction-history-home">
                <div className="transaction-history-item">
                    <img src={tranction} className="trans-images" alt=''/>
                    <h4 style={{color:"rgb(64, 64, 150)", width:"24%"}}>Shaket</h4>
                    <h4 style={{color:"rgb(64, 64, 150)"}}>19/8/2023</h4>
                    <h3 style={{color:"rgb(175, 123, 224)"}}>$4000</h3>
                </div>

                <div className="transaction-history-item">
                    <img src={tranction} className="trans-images" alt="tranction"/>
                    <h4 style={{color:"rgb(64, 64, 150)", width:"24%"}}>Niraj</h4>
                    <h4 style={{color:"rgb(64, 64, 150)"}}>19/8/2023</h4>
                    <h3 style={{color:"rgb(175, 123, 224)"}}>$4000</h3>
                </div>

                <div className="transaction-history-item">
                    <img src={tranction} className="trans-images" alt="tranction"/>
                    <h4 style={{color:"rgb(64, 64, 150)", width:"24%"}}>Pratikesh</h4>
                    <h4 style={{color:"rgb(64, 64, 150)"}}>19/8/2023</h4>
                    <h3 style={{color:"rgb(175, 123, 224)"}}>$4000</h3>
                </div>

            </div>
        </div>

        <div className="transaction-history-btn">
            <button className="transaction-history-button">Read More...</button>
        </div>
      </div>
    </div>
  </>
);
export default AdminWallet;
