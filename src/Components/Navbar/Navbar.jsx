import React from "react";
import { Search, Apps, Notifications, OpenWith } from "@mui/icons-material";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Scent-sense-admin</span>
      </div>
      <div className="icons">

      <Search className="icon" />
      <Apps className="icon" />
      <OpenWith className="icon" />
      
        <div className="notification">
        <Notifications />
        <span className="noti">1</span>
        </div>

        <div className="user">
          <img src={require("../../Assets/Images/profile.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
