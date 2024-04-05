import { useRef, useCallback } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace } from "../../redux/action";
import { getPlace } from "../../redux/selectors";
import { getAddressFromCoordinates } from "../../utils/geocoding";
import { mapThemeLight, mapThemeDark } from "./Theme";

const containerStyle = {
  width: "100%",
  height: "576px",
  borderRadius: "12px",
  paddingBottom: "16px",
  boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 2px 2px",
  border: "none",
  marginBottom: "0.3rem",
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
  styles: mapThemeLight,
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
        <MarkerF position={{ lat, lng }}/>
      </GoogleMap>
    </div>
  );
};
