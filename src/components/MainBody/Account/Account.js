import React from "react";
import "./Account.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Account() {
  return (
    <div className="sidebar">
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <AccountCircleIcon className="account_icon" />
        </div>

        <div className="account_name">
          <p>Lucie Montgometry</p>
        </div>

        <div className="account_title">
          <p>UI/UX Designer</p>
        </div>

        <div className="account_details">
          <div className="account_title" style={{ marginLeft: "6%" }}>
            <h3>767</h3>
            <div style={{ fontSize: "20px", fontWeight: 100 }}>Connections</div>
          </div>

          <div className="account_title" style={{ marginRight: "6%" }}>
            <h3>60</h3>
            <div style={{ fontSize: "20px", fontWeight: 100 }}>Views</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
