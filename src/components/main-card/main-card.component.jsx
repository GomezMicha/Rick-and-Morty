import React from "react";
import "./main-card.style.css"

import MainCardtext from "../main-card-text/main-card-text.component";

const MainCard = () => {
    const myArray = [ {Status: "Alive"}, {Species: "Human"}, {Gender:"Male"}]
  return (
    <div className="main-card-wrapper">
        <div className="image-wrapper">
        <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt={``} />
        <h2>Summer Smith</h2>
        </div>
        { myArray.map( ( item, idx ) =>(
            <MainCardtext key={idx} theKey={Object.keys(item)} value={item[Object.keys(item)]}/>
        ) )}

    </div>
  );
};

export default MainCard;
