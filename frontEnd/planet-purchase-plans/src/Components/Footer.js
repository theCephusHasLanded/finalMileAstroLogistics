import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/ppp.png";
import pursuitLogo from "../assets/pursuit.png"
import gifcat from "../assets/gitcat.gif";

const Footer = () => {
  return (
    <Container fluid className="bg-purple py-3 foo text-center">
      <Row className="justify-content-center">
        <Col md={4} className="text-center text-md-start">
          <h4 className="mb-0">Developer:</h4>
        </Col>
        <Col md={2} className="text-center">
          <img src={gifcat} alt="Gifcat" height="100" />
        </Col>
        <Col md={4} className="text-center text-md-end">
          <div className="d-flex justify-content-center justify-content-md-end">
            <div className="me-4">
              <Link
                to="https://github.com/theCephusHasLanded"
                className="text-white"
                style={{ fontFamily: "Syne" }}
              >
                Christina's Github
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col md={2} className="text-center">
          <h2>Copyright 2023</h2>
        </Col>
        <Col md={2} className="text-center">
          <Link to="https://www.pursuit.org/" className="text-white">
            Built in
            <img src={pursuitLogo} alt="Pursuit Logo" height="40" />
          </Link>
        </Col>
        <Col md={2} className="text-center">
          <br />
          <Link to="#">
            <img src={logo} alt="Logo" height="80" />
          </Link>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center justify-content-md-end"
        >
            <Link
            to="https://trello.com/b/cJ5UvCl9/cephus-portfolio-mod-4"
            style={{ fontFamily: "Victor Mono", color: "gray" }}
          >
            <h2>Checkout My Trello!</h2>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <div className="d-flex justify-content-center">
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <button type="submit" className="btn btn-light">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
