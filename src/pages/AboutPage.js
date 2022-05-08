import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import NavMenu from '../components/common/NavMenu';
import NavMenuMobile from '../components/common/NavMenuMobile';
import About from '../components/others/About';

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenu />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <About />
        <div className="Desktop">
          <Footer />
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    );
  }
}

export default AboutPage;
