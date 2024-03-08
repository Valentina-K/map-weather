const initialPosition = {
  lat: 49.9613696,
  lng: 36.1562112,
  city: "Харків",
};

export const placeReducer = (state = initialPosition, action) => {
  switch (action.type) {
    case "place/updatePlace":
      return action.payload;

    default:
      return state;
  }
};

const initialWeather = {}

export const weatherReducer = (state = initialWeather, action) => {
  switch (action.type) {
    case "weather/updateWeather":
      return action.payload;
    default:
      return state;
  }
}
