import React, { useEffect, useState } from "react";
import "./Feed.css";
// import CreateIcon from "@material-ui/icons/Create";
// import ImageIcon from "@material-ui/icons/Image";
// import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
// import EventNoteIcon from "@material-ui/icons/EventNote";
// import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "../Post/Post";
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <div className="inputOption">
            <SubscriptionsIcon style={{ color: "#C0CBCD" }} />
            <h4>Video</h4>
          </div>
          <div className="inputOption">
            <EventNoteIcon style={{ color: "#C0CBCD" }} />
            <h4>Event</h4>
          </div>
          <div className="inputOption">
            <CalendarViewDayIcon style={{ color: "#C0CBCD" }} />
            <h4>Subscriptions</h4>
          </div>
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          // photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
