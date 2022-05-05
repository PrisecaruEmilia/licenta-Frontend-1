import React, { Component, Fragment } from 'react';
import NavMenu from '../components/common/NavMenu';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/NewArrival';
import NavMenuMobile from '../components/common/NavMenuMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
export class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    this.getVisitorDetails();
  }

  getVisitorDetails = () => {
    axios
      .get(AppUrl.VisitorDetails)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    return (
      <Fragment>
        {/* <NavMenu /> */}
        {/* <NavMenuMobile /> */}
        <div className="Desktop">
          <NavMenu />
          <HomeTop />
        </div>

        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
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

export default HomePage;
