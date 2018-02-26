import React from "react";
import AstroCard from "./AstroCard";

const Astro = ({astros}) => {
  if (!astros) {
    return (
      <div></div>
    );
  };

  const items = astros.map((astro) => {
    return (
      <AstroCard astro={astro} key={astro.date} />
    )   
  });

  return (
    <div className="horizontal-slide container">
      <ul className="horizontal-slide__wrapper">
        {items}
      </ul>
    </div>
  )
}

export default Astro;