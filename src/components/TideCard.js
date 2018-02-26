import React from "react";

const TideCard = ({tide}) => {
  return (
    <li className="horizontal-slide__wrapper--card">
      <table className="forecast">
        <tbody>
          <tr>
            <td>
              <img src = "tide.type" className="card-image" />
            </td>
            <td>
              <h3 className="weather-date">{ tide.date }</h3>
            </td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{ tide.height } m</td>
          </tr>
          <tr>
            <td>Type: </td>
            <td>{ tide.type }</td>
          </tr>
        </tbody>
    </table>
  </li>
  );
};

export default TideCard;