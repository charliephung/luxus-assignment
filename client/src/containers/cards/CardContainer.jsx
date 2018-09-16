import React from "react";
import Container from "components/common/section/Container";
import ZoomIn from "components/animation/Animate";
import Card from "components/common/card/Card";

const CardContainer = ({ cards, type, cardColor }) => {
  return (
    <Container className="flex  flex-wrap u-pad-top-2 u-pad-bottom-2  flex-even">
      {cards.map((card, index) => (
        <ZoomIn
          key={type + card.id}
          appear
          unmountOnExit
          in={true}
          timeout={{
            enter: 0,
            exit: 0
          }}
        >
          {status => (
            <Card
              style={{ transitionDelay: `${Math.random() * 0.2}s` }}
              className={`fade-${status}`}
            >
              <div
                style={{
                  color: cardColor
                }}
                className="card__header "
              >
                {card.header}
              </div>
              <div className="card__body">{card.body}</div>
            </Card>
          )}
        </ZoomIn>
      ))}
    </Container>
  );
};

export default CardContainer;
