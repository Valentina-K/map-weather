import React from "react";
import "./DaysOfWeek.css";
import {
  ConvertFromUnixTimestamp,
  getDate,
  getDayWeek,
} from "../../utils/parseData";

const DaysOfWeek = ({ date, icon, temp }) => {
  const dateW = ConvertFromUnixTimestamp(date);
  const day = getDayWeek(dateW);
  const src = "https://openweathermap.org/img/wn/" + icon + ".png";
  return (
    <>
      <p className="dayWeek">{day}</p>
      <p className="dateWeek">{getDate(dateW)}</p>
      <img src={src} alt="icon" />
      <p className="tempWeek">{Math.round(temp)} °C</p>
    </>
  );
};

export default DaysOfWeek;
