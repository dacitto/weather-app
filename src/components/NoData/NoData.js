import React from "react";
import "./NoData.scss";
import icon from "../../assets/img/error.svg";
const NoData = ({ data }) => {
  return (
    <main className="container no-data">
      <img src={icon} className="icon" />
      <div className="message">No city found with name "{data}"</div>
      <div>Please provide a correct city name</div>
    </main>
  );
};

export default NoData;
