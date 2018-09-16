import React from "react";

const Flash = ({ text, className, ...props }) => {
  if (text === undefined) {
    return <hr />;
  }
  return (
    <div {...props} className={"color-bg-green " + className}>
      <div className="u-pad-top-1 u-pad-bottom-1 flex-center">
        <h2 className="h2 white light-text">{text}</h2>
      </div>
    </div>
  );
};

export default Flash;
