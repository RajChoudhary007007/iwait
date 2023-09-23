import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const sidebarItems = [
    { label: "DASHBOARD", path: "/dashbord" },
    { label: "Account", path: "/worker-account" },
    { label: "My Jobs", path: "/my-jobs" },
    { label: "Best Matches", path: "/best-matches" },
    { label: "Complited Jobs", path: "/complited-jobs" },
    { label: "LOG OUT", path: "/logout" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-home-container">
        {sidebarItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={() => handleItemClick(index)}
            style={{
              backgroundColor: activeItem === index ? "red" : "#D9D9D9",
              display: "block",
              textDecoration: "none",
              color: "#504d4d",
              fontFamily: "Inter",
              fontSize: "23px",
              fontWeigth: "700",
              width: "300px",
              border: "1px solid #000",
              textAlign: "left",
              padding: "25px",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
