import React from "react";
import "./Header.scss";
const Header = ({ setCity, city }) => {
  return (
    <header className="header">
      <div className="container">
        <input
          type="text"
          className="search-bar"
          placeholder="type a city name"
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
        ></input>
      </div>
    </header>
  );
};
export default Header;
