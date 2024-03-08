import { configureStore } from "@reduxjs/toolkit";
import { placeReducer, weatherReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    place: placeReducer,
    weather: weatherReducer,
  },
});
