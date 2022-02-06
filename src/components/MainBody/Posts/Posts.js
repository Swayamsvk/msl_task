// import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Posts.css";
// import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
// import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
// import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        {/* <Avatar src={photoUrl}></Avatar> */}
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <div className="inputOption">
          <ThumbUpAltOutlinedIcon style={{ color: "gray" }} />
          <h4>Like</h4>
        </div>

        <div className="inputOption">
          <ChatOutlinedIcon style={{ color: "gray" }} />
          <h4>Subscriptions</h4>
        </div>

        <div className="inputOption">
          <ShareOutlinedIcon style={{ color: "gray" }} />
          <h4>Subscriptions</h4>
        </div>
        <div className="inputOption">
          <SendOutlinedIcon style={{ color: "gray" }} />
          <h4>Subscriptions</h4>
        </div>
      </div>
    </div>
  );
});

export default Post;
