import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SuggestedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>YOU MAY ALSO LIKE </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productdetails">
                <Card className="image-box card">
                  <img
                    className="center"
                    src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208613873_01_rz.jpg"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Pantofi NIKE - Air Jordan XXXV CQ4227 004
                    </p>
                    <p className="product-price-on-card">Price : 898,00 lei</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProduct;
