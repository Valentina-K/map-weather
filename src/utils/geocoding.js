const MAP_KEY = import.meta.env.VITE_SERVER_KEY;
export function getAddressFromCoordinates(position) {
  const { lat, lng } = position;
  return new Promise((resolve, reject) => {
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        lng +
        "&key=" +
        MAP_KEY
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "OK") {
          resolve(responseJson?.results?.[0]?.address_components);
        } else {
          reject("not found");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
