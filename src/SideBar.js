import React from "react";
import "./SideBar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function SideBar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top ">
        <img
          src="https://miro.medium.com/max/960/1*c94SpnDXD8imHLUW0fl-ng.jpeg"
          alt="img"
        ></img>
        <Avatar src={user.photoURL} className="sidebar__avatar">{user.email[0]}</Avatar>
        <h1>{user.displayName}</h1>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <div className="sidebar__statNumber">2,546</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <div className="sidebar__statNumber">2,321</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("react.js")}
        {recentItems("programming")}
        {recentItems("softwarengineering")}
        {recentItems("machineLearning")}
      </div>
    </div>
  );
}
