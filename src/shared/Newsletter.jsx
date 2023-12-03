import React from "react";
import "./newsletter.css";
import { Container, Col, Row } from "reactstrap";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row className="d-flex align-items-center ">
          <Col lg="6">
            <div className="newsletter__content">
              <Row className="d-flex align-items-center gap-4">
                <Col lg="1" className="newslist">
                  <i class="ri-file-list-3-line "></i>
                </Col>
                <Col>
                  <h4>Your Travel Journey Starts Here</h4>
                  <p className="footer_text_signup">
                    Sign up and we'll send the best deals to you
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__content">
              <div className="newsletter__input d-flex align-items-center justify-content-space-between gap-4">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
