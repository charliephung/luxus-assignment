import React from "react";

const Footer = ({ children, className = "" }) => {
  return (
    <footer className={`footer u-pad-2 u-mar-top-2 ${className}`}>
      {children}
    </footer>
  );
};

export default Footer;
