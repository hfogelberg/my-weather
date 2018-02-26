import React from "react";
import WeatherCard from "./WeatherCard";

const Hourly = ({ hourly }) => {

  if (!hourly) {
    return (
      <div className="container"></div>
    );
  };

  const items = hourly.map((forecast) => {
    return (
      <WeatherCard forecast={forecast} key={forecast.date} />
    )
  });

  return (
    <div className="horizontal-slide container" >
      <ul className="horizontal-slide__wrapper" >
        {items}
      </ul>
    </div>
  )

}

export default Hourly;