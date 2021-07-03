import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

export default function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Salmen HSAIRI",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestap: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          {/* we need the form tag to submot it when user tap enter */}
          <form>
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption color="#7085F9" Icon={ImageIcon} title="Photo" />
          <InputOption color="#E7A33E" Icon={SubscriptionsIcon} title="Video" />
          <InputOption color="#C0CBCD" Icon={EventNoteIcon} title="Event" />
          <InputOption
            color="#7FC15E"
            Icon={CalendarViewDayIcon}
            title="Write article"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key = {id}
          name={name}
          description={description}
          message={message}
          photoUrl = {photoUrl}
        />
      )) }

      {/* <Post
        name="salmen HSAIRI"
        description="this is a test"
        message="this is a dummy post"
      /> */}
    </div>
  );
}
