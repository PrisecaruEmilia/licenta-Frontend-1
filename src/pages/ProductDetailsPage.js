import React, { Component, Fragment } from 'react';
import Footer from '../components/common/Footer';
import FooterMobile from '../components/common/FooterMobile';
import NavMenu from '../components/common/NavMenu';
import NavMenuMobile from '../components/common/NavMenuMobile';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct';
import AppURL from '../api/AppUrl';
import axios from 'axios';
import SliderLoading from '../components/PlaceHolder/SliderLoading';
export class ProductDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      code: match.params.code,
      ProductData: [],
      isLoading: '',
      mainDiv: 'd-none',
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(AppURL.ProductDetails(this.state.code))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: 'd-none',
          mainDiv: '',
        });
      })
      .catch((error) => {});
  }
  render() {
    if (this.state.mainDiv == 'd-none') {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenu />
          </div>

          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <SliderLoading isLoading={this.state.isLoading} />

          <div className="Desktop">
            <Footer />
          </div>

          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenu />
          </div>

          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <ProductDetails data={this.state.ProductData} />
          <SuggestedProduct />

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
}

export default ProductDetailsPage;
