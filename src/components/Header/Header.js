import React, { useState } from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";
const Header = ({ setCity, city }) => {
  const [search, setSeach] = useState("");
  return (
    <header className="header">
      <div className="container">
        <h1 className="title">weatherly</h1>
        <div className="flex">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Type city name here "
              className="search-input"
              value={search}
              onChange={(e) => {
                e.preventDefault();
                setSeach(e.target.value);
              }}
            ></input>
            <BsSearch className="icon" />
          </div>
          <button
            className="btn"
            onClick={() => {
              if (search !== "") setCity(search);
            }}
            disabled={search === "" ? "disabled" : null}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
