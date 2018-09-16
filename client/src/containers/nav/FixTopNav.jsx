import React, { Component } from "react";
import Nav from "components/common/nav/Nav";

export class FixTopNav extends Component {
  state = { isPinTop: true };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    if (this.isPinTop()) {
      if (!this.state.isPinTop) {
        this.setState({ isPinTop: true });
      }
    } else {
      if (this.state.isPinTop) {
        this.setState({ isPinTop: false });
      }
    }
  };
  isPinTop() {
    const { scrollTop } = document.documentElement;
    return scrollTop === 0;
  }
  render() {
    const bgColor = this.state.isPinTop ? "" : "color-bg-dark";

    return (
      <Nav className={`white nav--fix ${bgColor}`}>
        <Nav.Container>
          <Nav.List>
            <Nav.Item className="nav__item--brand">LUXUS</Nav.Item>
          </Nav.List>
          <Nav.List>
            <Nav.Item>Recipes </Nav.Item>
            <Nav.Item>Seasonal</Nav.Item>
            <Nav.Item>Blog</Nav.Item>
            <Nav.Item>Contact</Nav.Item>
          </Nav.List>
        </Nav.Container>
      </Nav>
    );
  }
}

export default FixTopNav;
