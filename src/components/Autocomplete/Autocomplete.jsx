import { useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch } from "react-redux";
import { updatePlace } from "../../redux/action";
import "./Autocomplete.css";

export const PlacesAutocomplete = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    setValue("", false);
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        dispatch(
          updatePlace({
            lat,
            lng,
            city: description.slice(0, description.indexOf(",")),
          })
        );
      });
    };

  useEffect(() => {
    if (isLoaded) init();
  }, [isLoaded, init]);

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="suggestion_item"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="container">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where will we watch?"
        className="autocomplete"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && (
        <ul className="suggestions">{renderSuggestions()}</ul>
      )}
    </div>
  );
};
