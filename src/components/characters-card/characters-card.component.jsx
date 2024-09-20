import React from "react";
import "./characters-card.style.css"
import HeartIcon from "../../assets/Heart.png"

const CharactersCard = ({name, species, image}) => {

  return (
    <div className="characters-card-wrapper">
      
      <div className="characters-card-container">
       <div className="avatar-image">
        <img src={image} alt={``} />
       </div>
        <div className="text-wrapper">
         <h3>{name}</h3>
         <p>{species}</p>
        </div>
        <div className="favorite-icon">
          <img src={HeartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;