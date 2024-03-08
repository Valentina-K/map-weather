import React from "react";
import "./Week.css";
import { useSelector } from "react-redux";
import { getWeather } from "../../redux/selectors";
import DaysOfWeek from "./DaysOfWeek";

const Week = () => {
  const list = useSelector(getWeather);
  const filterList = list.filter(
    (item, index) => index === 0 || index % 8 === 0
  );
  return (
    <ul className="week">
      {filterList.map((item) => (
        <li key={item.dt} className="week-item">
          <DaysOfWeek
            date={item.dt}
            temp={item.main.temp}
            icon={item.weather[0].icon}
          />
        </li>
      ))}
    </ul>
  );
};

export default Week;
