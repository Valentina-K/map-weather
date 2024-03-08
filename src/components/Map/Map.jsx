import { useRef, useCallback } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace } from "../../redux/action";
import { getPlace } from "../../redux/selectors";
import { getAddressFromCoordinates } from "../../utils/geocoding";
import "./Map.css";

//import { mapThemeLight1, mapThemeDark } from "./Theme";

const containerStyle = {
  width: "840px",
  height: "650px",
  borderRadius: "12px",
  paddingBottom: "16px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
  marginBottom: "15px",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcurts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  /* styles: mapThemeDark, */
};

export const Map = () => {
  const { lat, lng } = useSelector(getPlace);
  const dispatch = useDispatch();
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);
  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const handleClick = (pos) => {
    const lat = pos.latLng.lat();
    const lng = pos.latLng.lng();
    getAddressFromCoordinates({ lat, lng })
      .then((results) => {
        for (const item of results) {
          const isPlace = item.types.some((type) => type === "locality");
          if (isPlace) {
            dispatch(updatePlace({ lat, lng, city: item.long_name }));
            return;
          }
        }
      })
      .catch(console.error);
  };

  return (
    <div className="container">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        onClick={handleClick}
      >
        <Marker position={{ lat, lng }} icon={{ url: "/images/marker.png" }} />
      </GoogleMap>
    </div>
  );
};
