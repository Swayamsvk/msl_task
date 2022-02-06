import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Post from "../Posts/Posts";
import axios from "axios";
// import FlipMove from "react-flip-move";

function Feed() {
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos?page=1&&client_id=41d46225d571eaf038ef9de4a666a459a6ff9a1e19b433390fdd98794693621d"
      )
      .then((response) => {
        console.log(response.data, "this is the data==============>");
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
          </form>
        </div>
        <div className="feed_inputOption">
          <div className="inputOption">
            <ArticleOutlinedIcon style={{ color: "#C0CBCD" }} />
            <h4>Article</h4>
          </div>
          <div className="inputOption">
            <CameraAltOutlinedIcon style={{ color: "#C0CBCD" }} />
            <h4>Image</h4>
          </div>
          <div className="inputOption">
            <SubscriptionsIcon style={{ color: "#C0CBCD" }} />
            <h4>Video</h4>
          </div>
        </div>
      </div>

      {posts.map((curPost, id) => (
        <Post
          key={id}
          name={curPost.user.name}
          description={curPost.user.bio}
          message={curPost.createdAt}
          // photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
