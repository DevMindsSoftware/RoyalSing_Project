import React from "react";
import Header from "../Header";
import royallogoimage from "../../../images/Royal Logo.png"
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="container-fluid devmind-home">
        <Header />
        <div className="devmind-royalsign">
          <h1 className="devmind-royal">
            {/* ROYAL<span className="devmind-sign">Sign</span> */}
            <img src={royallogoimage} className="devminds-royallogoimge"/>
          </h1>
        </div>
        <div className="devmind-royaltext">
          <h3 className="denminds-h3righttext">
            we are create
            <br />
            connection through
            <br />
            outdoor advertising
          </h3>
          <br />
        </div>
      </div>
    </>
  );
};

export default Banner;
