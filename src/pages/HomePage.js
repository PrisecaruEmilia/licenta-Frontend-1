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
export class HomePage extends Component {
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
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
