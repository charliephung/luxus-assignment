import React from "react";
import ZoomIn from "components/animation/Animate";
import Container from "components/common/section/Container";
import Card from "components/common/card/Card";
const option = {
  appear: true,
  in: true,
  timeout: {
    enter: 0,
    exit: 0
  }
};
const FoodContainer = ({ foods = [] }) => {
  return (
    <Container className="flex  flex-wrap u-pad-top-2 u-pad-bottom-2  flex-even">
      {foods.length === 0 ? (
        <ZoomIn {...option} key={Date.now()}>
          {status => (
            <Card
              style={{ transitionDelay: ` ${Math.random() * 0.2}s` }}
              className={`fade-${status}`}
            >
              <figure>
                <i className="far fa-laugh-wink" />
              </figure>
              <h3 className="h3 text-center  u-mar-1">Comming soon!</h3>
              <br />
            </Card>
          )}
        </ZoomIn>
      ) : (
        foods.map((ele, index) => (
          <ZoomIn {...option} key={index + "-" + ele.id}>
            {status => (
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
            )}
          </ZoomIn>
        ))
      )}
    </Container>
  );
};

export default FoodContainer;
