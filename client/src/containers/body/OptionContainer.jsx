import React from "react";
import ZoomIn from "components/animation/Animate";
import Container from "components/common/section/Container";
import { Link } from "react-router-dom";
import Card from "components/common/card/Card";
const option = {
  appear: true,
  in: true,
  timeout: {
    enter: 0,
    exit: 0
  }
};
const OptionContainer = ({ options = [], link = "" }) => {
  return (
    <Container className="flex  flex-wrap u-pad-top-2 u-pad-bottom-2  flex-even">
      {options.map((ele, index) => (
        <ZoomIn {...option} key={index + "-" + link + ele.id}>
          {status => (
            <Link to={`${link}${ele.id === undefined ? "" : `/${ele.id}`}`}>
              <Card
                style={{ transitionDelay: ` ${Math.random() * 0.2}s` }}
                className={`fade-${status}`}
              >
                <figure>
                  <img src={`${ele.desc[0]}`} alt="" />
                </figure>
                <h3 className="h3 text-center  u-mar-1">{ele.desc[1]}</h3>
                <p className="text-center u-mar-1">{ele.desc[2]}</p>
                <br />
              </Card>
            </Link>
          )}
        </ZoomIn>
      ))}
    </Container>
  );
};

export default OptionContainer;
