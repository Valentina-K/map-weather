import React from "react";
import "./Hours.css";
import { ConvertFromUnixTimestamp, getTime } from "../../utils/parseData";

const Hours = ({ date, temp, descr, icon }) => {
  const hourlyDate = ConvertFromUnixTimestamp(date);
  const time = getTime(hourlyDate);
  const src = "https://openweathermap.org/img/wn/" + icon + ".png";
  return (
    <>
      <p className="hourTime">{time}</p>
      <p className="hourDesc">{descr}</p>
      <img src={src} alt="icon"/>
      <p className="hourTemp">{Math.round(temp)} °C</p>
    </>
  );
};

export default Hours;
