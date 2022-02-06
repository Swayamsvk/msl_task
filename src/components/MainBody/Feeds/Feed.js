import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SendIcon from "@mui/icons-material/Send";
import Post from "../Posts/Posts";
import axios from "axios";

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
          <SendIcon />
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
          title={curPost.created_at.slice(0, 10)}
          description={curPost.user.bio}
          profilePhotoUrl={curPost.user.profile_image.medium}
          mainPhotoUrl={curPost.urls.regular}
        />
      ))}
    </div>
  );
}

export default Feed;
