import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import ios from "../../assets/images/ios-app_v1.png";
import android from "../../assets/images/android-app_v1.png";

import { Link } from "react-router-dom";
import Newsletter from "../../shared/Newsletter";

const quick__links = [
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/",
    display: "Careers",
  },
  {
    path: "/",
    display: "Press",
  }
];

const quick__links2 = [
  {
    path: "/",
    display: "Contact",
  },
  {
    path: "/",
    display: "Legal Notice",
  },
  {
    path: "/",
    display: "Payments",
  },
  {
    path: "/",
    display: "Cancellation",
  },
];
const quick__links3 = [
  {
    path: "/",
    display: "Car hire",
  },
  {
    path: "/",
    display: "Activity Finder",
  },
  {
    path: "/",
    display: "Flight Finder",
  },
  {
    path: "/",
    display: "Guider",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Newsletter />
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <div className="logo">
                <h5 className="footer__link-title">Contact Us</h5>
                <p>Toll Free Customer Care</p>
                <h4 className="footer__contact__no">+91 7762006903</h4>
              </div>
            </Col>

            <Col md="2">
              <h5 className="footer__link-title">Company</h5>
              <ListGroup className="footer__quick-links">
                {quick__links.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col md="2">
              <h5 className="footer__link-title">Support</h5>

              <ListGroup className="footer__quick-links">
                {quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col md="2">
              <h5 className="footer__link-title">Other Services</h5>

              <ListGroup className="footer__quick-links">
                {quick__links3.map((item, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col md="2">
              <h5 className="footer__link-title">Mobile</h5>

              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <img src={android} alt="ios-app" />
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <img src={ios} alt="ios-app" />
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="12" className="text-center pt-5">
              <p className="copyright">Copyright {year}.All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
