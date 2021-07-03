import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";


export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          {/* we need the form tag to submot it when user tap enter */}
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
              </div>
              <div className="feed__inputOptions">
                  <InputOption color="#7085F9" Icon={ ImageIcon } title="Photo"/>
                  <InputOption color="#E7A33E" Icon={ SubscriptionsIcon } title="Video"/>
                  <InputOption color="#C0CBCD" Icon={ EventNoteIcon } title="Event"/>
                  <InputOption color="#7FC15E" Icon={ CalendarViewDayIcon } title="Write article"/>
              </div>
      </div>
    </div>
  );
}
