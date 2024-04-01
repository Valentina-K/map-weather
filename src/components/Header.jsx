import React from "react";
import "./Header.css";

const img_url = import.meta.env.BASE_URL;
const sun_src = img_url+"/images/sun.png";
const snow_src = img_url+"/images/снег.png";
const rain_src = img_url+"/images/rain.png";

export const Header = () => {
  
  return (
    <div className="header">
      <div className="header-img-wrap">
        <img
          src={sun_src}
          alt="sun"
          style={{ width: 110, height: 110 }}
        />
        <img
          src={snow_src}
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
          src={rain_src}
          alt="rain"
          style={{ width: 110, height: 110 }}
        />
      </div>
    </div>
  );
};
