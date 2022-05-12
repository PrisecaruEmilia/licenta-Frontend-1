import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import NavMenu from '../components/common/NavMenu';
import NavMenuMobile from '../components/common/NavMenuMobile';
import UserLogin from '../components/common/UserLogin';

class UserLoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const setUser = this.props.setUser;
    const user = this.props.user;

    return (
      <Fragment>
        <div className="Desktop">
          <NavMenu />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <UserLogin setUser={setUser} user={user} />

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

export default UserLoginPage;
