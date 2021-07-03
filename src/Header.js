import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from  "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://github.com/salmenhsairi/Cources/blob/master/public/images/linkedin.png?raw=true"
            alt="logo"
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" input />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messaging" Icon={ChatIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsIcon} />
          <HeaderOption
            title="me"
            avatar={
              "https://image.freepik.com/vecteurs-libre/tete-homme-barbu-noeud-papillon-portrait-homme-brun-barbu-avatar-dendy-elegant-pour-reseaux-sociaux-portrait-masculin-abstrait-plein-visage-illustration-dans-style-plat_276162-43.jpg"
            }
          />
        </div>
      </div>
    );
}
