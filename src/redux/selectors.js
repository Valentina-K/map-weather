export const getPlace = (state) => state.place;
export const getWeatherAll = (state) => state.weather;
export const getWeather = (state) => state.weather.list;
export const getCityInfo = (state) => state.weather.city;
export const getCurrentWeather = (state) => state.weather.list[0];
export const getIsData = (state) => Object.keys(state.weather).length !== 0;
