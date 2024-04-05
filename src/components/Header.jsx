import React from "react";
import "./Header.css";

const img_url = import.meta.env.BASE_URL;
const sun_src = img_url+"/images/sun.png";
const snow_src = img_url+"/images/снег.png";
const rain_src = img_url+"/images/rain.png";

export const Header = () => {
  
  return (
    <div className="header">        
        <h1 className="header-title">Weather anywhere in the world</h1>
        <p className="header-text">Select a place on the map</p>           
    </div>
  );
};
