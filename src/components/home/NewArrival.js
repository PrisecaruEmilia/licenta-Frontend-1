import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp; NEW ARRIVAL &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://deichmann.scene7.com/asset/deichmann/p_pd_gradiant/--18206181_P_DRO.jpg?defaultImage=default"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      SNEAKERSI CASUAL NIKE COURT VISION LOW
                    </p>
                    <p className="product-price-on-card">Price : 320,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000206983022_1__1.jpg"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teniși LEVI'S - 225849-1733-50 Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000209263176_01_rz.jpg"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Sneakers NEW BALANCE - ML515HL3 Negru
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208668965_01_pa.jpg"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi închiși HUGO - Ruston 50459079
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208918152_01_rz_1.jpg"
                    alt="SNEAKERSI"
                  ></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Sneakers PUMA - Rs-X³ 374758 02 Puma
                    </p>
                    <p className="product-price-on-card">Price : 348,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
