import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <div className="card" onClick={() => props.clickHero(props.id)}>
      <div className="img-container">
        <img alt={props.shortName} src={props.image} />
      </div>
    </div>
  );
}

export default HeroCard;