import React from "react";

const Card = ({ children, className = "", ...rest }) => {
  return (
    <div {...rest} className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
