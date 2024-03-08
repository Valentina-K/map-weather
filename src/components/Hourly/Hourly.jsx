import { useSelector } from "react-redux";
import "./Hourly.css";
import Hours from "./Hours";
import { getWeather } from "../../redux/selectors";

const Hourly = () => {
  const hourlyList = useSelector(getWeather);
  const list = hourlyList.slice(0, 8);
  return (
    <ul className="hourly">
      {list.map((item) => (
        <li key={item.dt} className="hourlyItem">
          <Hours
            date={item.dt}
            temp={item.main.temp}
            descr={item.weather[0].description}
            icon={item.weather[0].icon}
          />
        </li>
      ))}
    </ul>
  );
};

export default Hourly;
