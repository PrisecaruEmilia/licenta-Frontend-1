import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import NavMenu from '../components/common/NavMenu';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Register from '../components/common/Register';

export class RegisterPage extends Component {
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

        <Register />

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

export default RegisterPage;
