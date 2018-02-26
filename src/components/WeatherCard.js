import React from "react";

const WeatherCard = ({forecast}) => {
  return (
    <li className="horizontal-slide__wrapper--card" key={forecast.date}>
      <table className="forecast">
        <tbody>
          <tr>
            <td>
            </td>
            <td>
              <h3 className="weather-date">
                {forecast.date}<br />
              </h3>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className="summary">
              {forecast.summary}
            </td>
          </tr>
          <tr>
            <td>Temp:</td>
            <td>{forecast.temp}°C</td>
          </tr>
          <tr>
            <td>Pressure: </td>
            <td>{forecast.pressure} hPa</td>
          </tr>
          <tr>
            <td>Wind: </td>
            <td>{forecast.windBearing} {forecast.windSpeed} m/s</td>
          </tr>
          <tr>
            <td>Humidity: </td>
            <td>{forecast.humidity} % </td>
          </tr>
          <tr>
            <td>Cloud: </td>
            <td>{forecast.cloudCover} %</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default WeatherCard;