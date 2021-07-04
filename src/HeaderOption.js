import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function HeaderOption({avatar, Icon, title, onclick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onclick}>
      {Icon && <Icon className="headerOption__icon" />}
      { avatar && (<Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>)}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}
