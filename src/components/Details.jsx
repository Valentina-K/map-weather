import React from "react";
import "./Details.css";
import { useSelector } from "react-redux";
import { getCurrentWeather, getCityInfo } from "../redux/selectors.js";
import Hourly from "./Hourly/Hourly.jsx";
import * as utils from "../utils/parseData.js";

const Details = () => {
  const current = useSelector(getCurrentWeather);
  const city = useSelector(getCityInfo);
  let precipitation = 0;

  const { visibility, main, wind } = current;
  const { speed, deg } = wind;
  const { feels_like, humidity, pressure, temp_max, temp_min } = main;
  const keys = Object.keys(current);
  if (keys.some((key) => key === "rain")) {
    const { rain } = current;
    const propName = "3h";
    precipitation = rain[propName];
  }

  if (keys.some((key) => key === "snow")) {
    const { snow } = current;
    const propName = "3h";
    precipitation = snow[propName];
  }

  const style = { transform: "rotate(" + deg + "deg)" };
  return (
    <div className="details-list">
      <div className="details-list__item">
        <span>Feels like</span>
        <span>{Math.round(feels_like)} °C</span>
      </div>
      <div className="details-list__item">
        <span>Min temp</span>
        <span>{Math.round(temp_min)} °C</span>
      </div>
      <div className="details-list__item">
        <span>Max temp</span>
        <span>{Math.round(temp_max)} °C</span>
      </div>
      <div className="details-list__item">
        <span>Pressure</span>
        <span>{pressure} hPa</span>
      </div>
      <div className="details-list__item">
        <span>Humidity</span>
        <span>{humidity} %</span>
      </div>
      <div className="details-list__item">
        <span>Visibility</span>
        <span>{visibility} m</span>
      </div>
      <div className="details-list__item">
        <span>Wind</span>
        <div style={{ display: "flex" }}>
          <span>{Math.round(speed)}</span>
          <img src="/images/top_arrow_icon.svg" alt="deg" style={style} />
          <span> m/s</span>
        </div>
      </div>
      <div className="details-list__item">
        <span>Precipitation level</span>
        <span>{precipitation} mm</span>
      </div>
      <div className="details-list__item">
        <span>Sunrise</span>
        <span>
          {utils.getTime(utils.ConvertFromUnixTimestamp(city.sunrise))}
        </span>
      </div>
      <div className="details-list__item">
        <span>Sunset</span>
        <span>
          {utils.getTime(utils.ConvertFromUnixTimestamp(city.sunset))}
        </span>
      </div>
      <Hourly />
    </div>
  );
};

export default Details;
