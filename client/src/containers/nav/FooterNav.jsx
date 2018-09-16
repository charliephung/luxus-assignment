import React from "react";
import Nav from "components/common/nav/Nav";
import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterNav = () => {
  return (
    <Nav className="nav--border dark">
      <Nav.List>
        <Nav.Item className="blue nav__item--brand ">
          LUXUS
          <div className="footer__border u-mar-left-1 " />
        </Nav.Item>
        <Nav.Item>
          <small className="dark light-text">
            Result through design and technology
          </small>
        </Nav.Item>
      </Nav.List>
      <Nav.List className="nav__list">
        <Nav.Item>
          <FaFacebook />
        </Nav.Item>
        <Nav.Item>
          <FaLinkedin />
        </Nav.Item>
        <Nav.Item>
          <FaTwitter />
        </Nav.Item>
        <Nav.Item>
          <FaYoutube />
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
};

export default FooterNav;
