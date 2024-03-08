export const updatePlace = ({ lat, lng, city }) => {
  return {
    type: "place/updatePlace",
    payload: {
      lat,
      lng,
      city,
    },
  };
};

export const updateWeather = (weather) => {
  return {
    type: "weather/updateWeather",
    payload: weather,
  };
};
