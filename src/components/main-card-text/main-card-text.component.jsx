import React from "react";
import "./main-card-text.style.css"

const MainCardtext = ({ theKey, value}) =>{
    return(
        <div className="main-card-text-wrapper">
          <h3>{theKey}</h3>
          <p>{value}</p>
        </div>
    )
};

export default MainCardtext;