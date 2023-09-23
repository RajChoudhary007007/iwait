import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import HeaderAdmin from "../HeaderAdmin";
import Sidebar from "../Sidebar";
import "./index.css";

const Dashbord = () => (
  <>
   <HeaderAdmin />
    <div className="worker-home-container">
      <div className="worker-main-container">
        <Sidebar />
        <div className="worker-home-rigth-container">
          <div className="worker-home-inner-container">
            <div className="worker-home-item">
              <h1 className="worker-home-heading">Total Income</h1>
              <p className="worker-home-discription">Rs: 2000</p>
            </div>

            <div className="worker-home-item">
              <h1 className="worker-home-heading">Total Assigned Jobs</h1>
              <p className="worker-home-discription">Rs: 20</p>
            </div>

            <div className="worker-home-item">
              <h1 className="worker-home-heading">Pending Jobs</h1>
              <p className="worker-home-discription">Rs: 2000</p>
            </div>
          </div>

          <div className="worker-home-inner-container">
            <div className="worker-home-item">
              <h1 className="worker-home-heading">Completed Jobs</h1>
              <p className="worker-home-discription">Rs: 2000</p>
            </div>

            <div className="worker-home-item">
              <h1 className="worker-home-heading">Total Income</h1>
              <p className="worker-home-discription">Rs: 2000</p>
            </div>

            <div className="worker-home-item">
              <h1 className="worker-home-heading">Rewards</h1>
              <p className="worker-home-discription">Rs: 2000</p>
            </div>
          </div>

          <div>
            <hr className="worker-home-hr" />
          </div>
          <div className="worker-home-inner-container">
            <h1 className="worker-home-subheading">Total Assigned Job</h1>
            <h1 className="worker-home-subheading">Total Completed Job </h1>
            <h1 className="worker-home-subheading">Total Income Jobwise</h1>
          </div>

          <div className="worker-home-inner-container-pie">
            <div className="pai-contaner">
            <PieChart
                data={[
                  { title: "One", value: 27, color: "#E38627" },
                  { title: "Two", value: 20, color: "green" },
                  { title: "Three", value: 18, color: "#8000ff" },
                  { title: "4", value: 15, color: "blue" },
                  { title: "5", value: 23, color: "red" },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{
                  fontSize: "7px", // Adjust font size
                  fontFamily: "Arial, sans-serif", // Adjust font family
                  fill: "#fff", // Adjust label color
                  fontWeight:'bold'
                }}
              />
            </div>

            <div className="pai-contaner">
            <PieChart
                data={[
                  { title: "One", value: 15, color: "#E38627" },
                  { title: "Two", value: 27, color: "green" },
                  { title: "Three", value: 20, color: "#8000ff" },
                  { title: "4", value: 15, color: "blue" },
                  { title: "5", value: 21, color: "red" },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{
                  fontSize: "7px", // Adjust font size
                  fontFamily: "Arial, sans-serif", // Adjust font family
                  fill: "#fff", // Adjust label color
                  fontWeight:'bold'
                }}
              />
            </div>

            <div className="pai-contaner">
              <PieChart
                data={[
                  { title: "One", value: 15, color: "#E38627" },
                  { title: "Two", value: 23, color: "green" },
                  { title: "Three", value: 10, color: "#8000ff" },
                  { title: "4", value: 28, color: "blue" },
                  { title: "5", value: 21, color: "red" },
                ]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                labelStyle={{
                  fontSize: "7px", // Adjust font size
                  fontFamily: "Arial, sans-serif", // Adjust font family
                  fill: "#fff", // Adjust label color
                  fontWeight:'bold'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dashbord;
