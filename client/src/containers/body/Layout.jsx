import React, { Fragment } from "react";
import Flash from "./Flash";
import { Route } from "react-router-dom";
import FoodContainer from "./FoodContainer";
import OptionContainer from "./OptionContainer";
import { db, foods } from "./cards";
const find = id => db.find(e => e.id === id);
const query = foods => params => {
  if (params.length === 0) {
    return foods;
  }
  let res = foods.filter(e => {
    if (
      params.every(p => [...e.ingredient, ...e.country, ...e.meal].includes(p))
    ) {
      return e;
    }
  });

  return res;
};

const findFood = query(foods);

const Layout = ({ match }) => {
  const content = find(match.params.id);
  const layout =
    content === undefined
      ? []
      : content.resources === undefined
        ? []
        : content.resources;

  if (match.url === "")
    return <Route path={`${match.url}/:id`} component={Layout} />;
  if (layout.length === 0) {
    const outputFood = findFood(
      match.url
        .split("/")
        .filter(e => e !== "")
        .slice(1)
    );

    return (
      <Fragment>
        <Flash text={"Enjoy :)"} />
        <FoodContainer foods={outputFood} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      {content === undefined ? (
        <Flash
          key={match.url}
          text={"Comming soon :)"}
          style={{
            transition: "all .5s"
          }}
        />
      ) : (
        <Flash
          key={match.url}
          text={content && content.message && content.message}
          style={{
            transition: "all .5s"
          }}
        />
      )}
      <OptionContainer options={layout} link={`${match.url}`} />
      <Route path={`${match.url}/:id`} component={Layout} />
    </Fragment>
  );
};

export default Layout;
