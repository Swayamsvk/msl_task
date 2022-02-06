import React from "react";
import "./Widgets.css";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function Widgets() {
  const connections = (heading, subtitle) => (
    <div className="widget_name">
      <div className="widgets_nameright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>People you may know</h2>
      </div>
      <Divider />

      {connections("Nina Douglas", "Recruiter - Orange")}
      <Divider />
      {connections("Harry Cladwell", "Looking for team Lead Java Developer")}
      <Divider />
      {connections("Hattie Patrick", "UI/UX Designer")}
      <Divider />
      {connections("Fannie Santiego", "SEO Specialist")}
    </div>
  );
}

export default Widgets;
