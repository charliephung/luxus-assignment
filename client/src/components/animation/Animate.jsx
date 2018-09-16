import React from "react";
import Transition from "react-transition-group/Transition";

const Animate = ({
  appear = false,
  mountOnEnter = false,
  unmountOnExit = false,
  in: i,
  timeout = 0,
  children,
  ...rest
}) => {
  return (
    <Transition
      {...rest}
      appear={appear}
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      in={i}
      timeout={timeout}
    >
      {status => (typeof children === "function" ? children(status) : children)}
    </Transition>
  );
};

export default Animate;
