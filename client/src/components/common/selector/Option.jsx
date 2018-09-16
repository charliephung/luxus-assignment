import React from "react";

const Option = ({ children, ...rest }) => {
  return (
    <li {...rest} className="selector__item" value="">
      {children}
    </li>
  );
};

export default Option;
