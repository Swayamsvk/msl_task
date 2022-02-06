import { Avatar } from "@mui/material";
import React from "react";
import "./Posts.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Post = ({ name, title, description, profilePhotoUrl, mainPhotoUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar src={profilePhotoUrl}></Avatar>
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{title}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{description}</p>
        <img src={mainPhotoUrl} style={{ height: "500px", width: "100%" }} />
      </div>

      <div className="post_buttons">
        <div className="inputOption">
          <ThumbUpAltOutlinedIcon style={{ color: "gray" }} />
          <h4>Like</h4>
        </div>

        <div className="inputOption">
          <ChatOutlinedIcon style={{ color: "gray" }} />
          <h4>Comment</h4>
        </div>

        <div className="inputOption">
          <ShareOutlinedIcon style={{ color: "gray" }} />
          <h4>Share</h4>
        </div>
      </div>
    </div>
  );
};

export default Post;
