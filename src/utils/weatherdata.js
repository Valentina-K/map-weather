const WEATHER_KEY = import.meta.env.WEATHER_KEY;

export function getWeatherData(position) {
  const { lat, lng } = position;
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=" +
        WEATHER_KEY +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.cod === "200") resolve(res);
        else reject("not found!");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
