import React from "react";

const AstroCard = ({astro}) => {
  return (
    <li class="horizontal-slide__wrapper--card">
      <table class="forecast">
        <tr>
          <td>
            <img class="card-image" src="imageRootUrl + 'clear-day.svg'" />
          </td>
          <td>
            <h3 class="weather-date">{ astro.date }</h3>
          </td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{ astro.sunrise }</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{ astro.sunset }</td>
        </tr>
        <tr>
          <td>
            <img src="astro.moonImage" class="card-image" />
          </td>
          <td>{ astro.fraction }</td>
        </tr>
        <tr>
          <td>Moonrise</td>
          <td>{ astro.moonrise }</td>
        </tr>
        <tr>
          <td>Moonset</td>
          <td>{ astro.moonset }</td>
        </tr>
      </table>
    </li>
  );
};

export default AstroCard;