import React, { Component } from "react";

const Container = ({ children, className = "" }) => {
  return <div className={`nav__container ${className}`}>{children}</div>;
};
const List = ({ children, className = "" }) => {
  return <div className={`nav__list ${className}`}>{children}</div>;
};
const Item = ({ children, className = "" }) => {
  return <div className={`nav__item ${className}`}>{children}</div>;
};

export class Nav extends Component {
  static Container = Container;
  static List = List;
  static Item = Item;
  render() {
    const { children, className = "" } = this.props;
    return <nav className={"nav " + className}>{children}</nav>;
  }
}

export default Nav;
