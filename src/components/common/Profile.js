import React, { Component } from 'react';
import { Fragment } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
class Profile extends Component {
  render() {
    let name;
    let email;
    let photo;
    let myPhoto;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
      if (this.props.user.profile_photo_path === '') {
        myPhoto = (
          <Card.Img
            variant="top"
            src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
            className="userprofile"
          />
        );
      } else {
        photo = this.props.user.profile_photo_path;
        myPhoto = (
          <Card.Img variant="top" src={photo} className="userprofile" />
        );
      }
    }
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div className="section-title text-center mb-55">
          <h2>User Profile Page</h2>
        </div>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card style={{ width: '18rem' }}>
                {myPhoto}

                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {' '}
                    <Link className="text-link" to="/orderlist">
                      {' '}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{' '}
                  </ListGroupItem>

                  <ListGroupItem>
                    {' '}
                    <Link className="text-link" to="/orderlist">
                      {' '}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{' '}
                  </ListGroupItem>

                  <ListGroupItem>
                    {' '}
                    <Link className="text-link" to="/orderlist">
                      {' '}
                      <p className="product-name-on-card"> Order List </p>
                    </Link>{' '}
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>

            <Col lg={8} md={8} sm={12}>
              <ul className="list-group">
                <li className="list-group-item">Name : {name} </li>
                <li className="list-group-item">Email : {email} </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
