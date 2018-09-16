import React, { Fragment } from "react";
import Header from "components/common/header/Header";
import FixTopNav from "containers/nav/FixTopNav";
import FooterNav from "containers/nav/FooterNav";
import Footer from "components/common/footer/Footer";
import Container from "components/common/section/Container";
import Main from "containers/body/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "styles/styles.comp.css";

const App = () => {
  return (
    <Fragment>
      <FixTopNav />
      <Header />
      <Router>
        <Main />
      </Router>
      <Footer className="footer u-pad-2 u-mar-top-2">
        <Container>
          <FooterNav />
        </Container>
      </Footer>
    </Fragment>
  );
};

export default App;
