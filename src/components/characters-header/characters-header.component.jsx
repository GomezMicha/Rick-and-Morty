import React from "react";
import "./characters-header.style.css"


const CharactersHeader = ({ title, num}) => {
  return (
    <div className="characters-header">
      <div className="characters-title">
        <h2>{title} ({num}) </h2>
      </div>
    </div>
  );
};

export default CharactersHeader;