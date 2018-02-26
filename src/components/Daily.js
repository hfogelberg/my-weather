import React from "react";
import WeatherCard from "./WeatherCard";

const Daily = ({daily}) => {

  if (!daily) {
    return (
      <div className = "container">
        <h1 className = "primary-header">My Weather</h1>
      </div>
    );
  };

  const items = daily.map((forecast) => {
    return (
      <WeatherCard forecast = {forecast} key = {forecast.date}/>
    )
  });

  return (
    <div className = "horizontal-slide container" >
      <ul className = "horizontal-slide__wrapper" >
        { items }
      </ul>
    </div>
  )
  
}

export default Daily;