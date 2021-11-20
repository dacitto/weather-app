import React from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
const Header = ({ setCity, city }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">weatherly</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type city name here "
            className="search-input"
            value={city}
            onChange={(e) => {
              e.preventDefault();
              setCity(e.target.value);
            }}
          ></input>
          <BsSearch className="icon" />
        </div>
      </div>
    </header>
  );
};
export default Header;
