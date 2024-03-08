import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-img-wrap">
        <img
          src="/images/sun.png"
          alt="sun"
          style={{ width: 110, height: 110 }}
        />
        <img
          src="/images/снег.png"
          alt="snow cloud"
          style={{ width: 110, height: 110 }}
        />
      </div>
      <div>
        <h1 className="header-title">Weather anywhere in the world</h1>
        <p className="header-text">Select a place on the map</p>
      </div>
      <div className="header-img-wrap">
        <img
          src="/images/rain.png"
          alt="rain"
          style={{ width: 110, height: 110 }}
        />
      </div>
    </div>
  );
};
