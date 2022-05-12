import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import NavMenu from '../components/common/NavMenu';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Profile from '../components/common/Profile';

class ProfilePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const User = this.props.user;
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenu />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <Profile user={User} />

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

export default ProfilePage;
