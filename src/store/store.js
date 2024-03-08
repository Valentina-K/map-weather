export const initialPosition = {
  lat: 49.9613696,
  lng: 36.1562112,
  place: "Харків",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "current":
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
      };
    case "setPlace":
      return {
        ...state,
        place: action.payload.place,
      };
    default:
      return state;
  }
};
