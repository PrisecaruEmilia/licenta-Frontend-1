import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AppURL from '../../api/AppUrl';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: '',
      loaderDiv: '',
      mainDiv: 'd-none',
    };
  }

  componentDidMount() {
    let SiteInfoPurchase = sessionStorage.getItem('AllSiteInfo');

    if (SiteInfoPurchase == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JsonData = response.data[0]['purchase_guide'];
            this.setState({
              purchase: JsonData,
              loaderDiv: 'd-none',
              mainDiv: '',
            });

            sessionStorage.setItem('SiteInfoPurchase', JsonData);
          } else {
            toast.error('Something Went Wrong', {
              position: 'bottom-center',
            });
          }
        })
        .catch((error) => {
          toast.error('Something Went Wrong', {
            position: 'bottom-center',
          });
        });
    } // end If Conditon
    else {
      this.setState({
        purchase: SiteInfoPurchase,
        loaderDiv: 'd-none',
        mainDiv: '',
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>

                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={this.state.mainDiv}>
                <h4 className="section-title-login">Purchase Page </h4>
                <div className="section-title-contact">
                  {' '}
                  {ReactHtmlParser(this.state.purchase)}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Purchase;
