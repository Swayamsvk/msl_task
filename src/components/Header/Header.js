import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "./asset/MainLogo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="logoss" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <div className="headerOption">
          <HomeIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Home</h3>
        </div>
        <div className="headerOption">
          <SupervisorAccountIcon className="headerOption_icon" />
          <h3 className="headerOption_title">My Network</h3>
        </div>
        <div className="headerOption">
          <BusinessCenterIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Jobs</h3>
        </div>
        <div className="headerOption">
          <ChatIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Messaging</h3>
        </div>
        <div className="headerOption">
          <NotificationsIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Notification</h3>
        </div>
        <div className="headerOption">
          <AccountCircleIcon className="headerOption_icon" />
          <h3 className="headerOption_title">me</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
