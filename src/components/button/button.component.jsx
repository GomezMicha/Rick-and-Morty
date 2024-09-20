import React from "react";
import "./button.style.css"


const Button = ({children, onClick}) => {
  return (
    <div className="button-wrapper" onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};

export default Button;