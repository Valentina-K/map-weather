import { useSelector } from "react-redux";
import { getCurrentWeather, getPlace } from "../redux/selectors";
import "./CityInfo.css";

const CityInfo = () => {
  const { city } = useSelector(getPlace);
  const current = useSelector(getCurrentWeather);

  const date = new Date();
  return (
    <div className="city-info">
      <p className="city-info__date">{date.toLocaleDateString()}</p>
      <h2 className="city-info__title">{city}</h2>
      <p className="city-info__themp">{Math.round(current.main.temp)} °C</p>
    </div>
  );
};

export default CityInfo;
