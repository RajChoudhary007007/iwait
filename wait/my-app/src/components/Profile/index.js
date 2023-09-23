import React, { useEffect, useState } from "react";
import axios from "axios";

import profile2 from "../../Assest/profile2.png";
import profile3 from "../../Assest/profile3.png";
import profile4 from "../../Assest/profile4.png";
import ProHeader from "../ProHeader";

import "./index.css";

const Profile = () => {
  const [data, setData] = useState(null);

  // useEffect(async () => {
  //   // Define your headers
  //   const headers = {
  //     Authorization: "Bearer YourAccessToken",
  //     "Content-Type": "application/json",
  //   };

  //   // Make a GET request using Axios
  //   try {
  //     const response = await axios.get("https://api.example.com/data", {
  //       headers,
  //     });
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }, []);

  return (
    <>
      <ProHeader />
      <div className="profile-home-main-container">
        <div className="profile-home">
          <div className="profile-home-background"></div>
          <div className="profile-lower-container">
            <div className="profile-details">
              <img className="profile-image" alt="profile1" src={profile2} />
            </div>

            <div className="profile-details">
              <img className="profile-image" alt="profile1" src={profile3} />
            </div>

            <div className="profile-details">
              <img className="profile-image" alt="profile1" src={profile4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
