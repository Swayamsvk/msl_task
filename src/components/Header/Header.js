import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
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
          <HomeOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Home</h3>
        </div>

        <div className="headerOption">
          <PeopleOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Network</h3>
        </div>

        <div className="headerOption">
          <ChatBubbleOutlineOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Messaging</h3>
        </div>

        <div className="headerOption">
          <NotificationsNoneOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Notification</h3>
        </div>

        <div className="headerOption">
          <BusinessCenterOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Jobs</h3>
        </div>

        <div className="headerOption">
          <GridViewOutlinedIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Work</h3>
        </div>

        <div className="headerOption_account">
          <AccountCircleIcon className="headerOption_icon" />
          <h3 className="headerOption_title">Lucie Montgometry</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
