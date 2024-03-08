import React from "react";
import CityInfo from "./CityInfo.jsx";
import Details from "./Details.jsx";

const RightBlock = () => {
  return (
    <div style={{ maxWidth: "370px" }}>
      <CityInfo />
      <Details />
    </div>
  );
};

export default RightBlock;
