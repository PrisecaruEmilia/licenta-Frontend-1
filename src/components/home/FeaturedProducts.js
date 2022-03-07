import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={4} sm={4} xs={6}>
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
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
