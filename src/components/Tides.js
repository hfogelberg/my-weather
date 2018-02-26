import React from "react";
import TideCard from "./TideCard";

const Tides = ({ tides }) => {
  if (!tides){
    return <div className="container">Fetching tides ... </div>;
  };


  const items = tides.map((tide) => {
    return (
      <TideCard tide = {tide} key = {tide.dt} />
    );
  });

  return (
    <div className="horizontal-slide container" >
      <ul className="horizontal-slide__wrapper" >
        {items}
      </ul>
    </div>
  );
}

export default Tides;