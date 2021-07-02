import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';

export default function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="logo"
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" input />
          </div>
        </div>
        <div className="header__right"></div>
      </div>
    );
}
