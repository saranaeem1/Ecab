import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
    return (
      <footer className="container-fluid footer-8 d-flex flex-column gap-5 text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 d-flex flex-column align-items-center gap-3">
              <img
                src="https://ecab.io/demov3.0/public/logo.png"
                alt=""
                className="img-fluid"
                width="200"
                height="100"
              />
              <hr
                className="m-0"
                style={{
                  backgroundColor: "#656565",
                  opacity: 1,
                  width: "100%",
                }}
              />
              <sub style={{ fontSize: "9px" }}>
                Copyright © 2022 Handio SAS ALL Drotis Reserved.
              </sub>
              <div className="d-flex justify-content-center flex-column align-items-center">
                <h5 className="m-0">
                  <strong>
                    <img
                      className="img-fluid"
                      src="https://ecab.io/demov3.0/public/secure-icon.png"
                      alt="secure"
                      width="40"
                    />
                    Secure payment
                  </strong>
                </h5>
                <p
                  className="m-0 text-white text-center"
                  style={{ fontSize: "10px" }}
                >
                  We use encrypted SSL security to ensure your credit card
                  information is 100% protected.
                </p>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
              <div className="row w-100">
                <div className="col-sm">
                  <h5 className="my-2">
                    <strong>SERVICES</strong>
                  </h5>
                  <hr className="m-0" />
                  <ul className="list-unstyled d-flex flex-column my-2">
                    <li>
                      <a href="#Services">PRIVATE TRANSPORT</a>
                    </li>
                    <li>
                      <a href="#Services">SHUTTLE TRANSPORT</a>
                    </li>
                    <li>
                      <a href="#Services">PROFESSIONAL TRANSPORT</a>
                    </li>
                    <li>
                      <a href="#Services">SCHOOL TRANSPORTATION</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm">
                  <h5 className="my-2">
                    <strong>INFORMATION</strong>
                  </h5>
                  <hr className="m-0" />
                  <ul className="list-unstyled d-flex flex-column my-2">
                    <li>
                      <a href="#Welcome">Reservation</a>
                    </li>
                    <li>
                      <a href="#Services">Services</a>
                    </li>
                    <li>
                      <a href="#Park">Park</a>
                    </li>
                    <li>
                      <a href="#Drivers">Drivers</a>
                    </li>
                    <li>
                      <a href="#Zones">Areas</a>
                    </li>
                    <li>
                      <a href="#Testimonials">Testimonials</a>
                    </li>
                    <li>
                      <a href="#FAQ">FAQs</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm">
                  <h5 className="my-2">
                    <strong>USEFUL LINKS LINKS</strong>
                  </h5>
                  <hr className="m-0" />
                  <ul className="list-unstyled d-flex flex-column my-2">
                    <li>
                      <a href="#">Connection</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm">
                  <h5 className="my-2">
                    <strong>SECTIONS</strong>
                  </h5>
                  <hr className="m-0" />
                  <ul className="list-unstyled d-flex flex-column my-2">
                    <li>
                      <a href="#Drivers">Driver</a>
                    </li>
                    <li>
                      <a href="#">Job</a>
                    </li>
                    <li>
                      <a href="#">Partner</a>
                    </li>
                    <li>
                      <a href="#">Affiliated</a>
                    </li>
                    <li>
                      <a href="#">Customer</a>
                    </li>
                  </ul>
                  <p className="m-0 text-white">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    <strong>Address:</strong> 40 Rue Alexandre Dumas 75011 Paris
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          style={{
            background:
              "rgba(0, 0, 0, 0) linear-gradient(to bottom, #27272b, #27272b) repeat scroll 0 0",
          }}
        >
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col className="d-flex text-white">
                <span>Powered by &nbsp;</span>
                <a
                  href="#"
                  target="_blank"
                  className="text-decoration-none d-flex text-white"
                >
                  eCab V3.0 &nbsp;
                  <img
                    src="https://ecab.io/demov3.0/public/creditcards.png"
                    alt=""
                  />
                </a>
              </Col>
              <Col>
                <div className="text-center">
                  <div className="mini-footer">
                    <a href="#">
                      <span className="send-us-email">Terms of Service </span>
                    </a>
                    <a href="#" className="px-2">
                      <span className="call-us">Privacy Policy </span>
                    </a>
                    <a href="#">
                      <span>Report Abuse </span>
                    </a>
                    <a href="#">
                      <span className="ticket-support">Legal </span>
                    </a>
                    <a href="#">
                      <span className="ticket-support">Driver Agreement </span>
                    </a>
                    <a href="#">
                      <span className="ticket-support">Partner Agreement </span>
                    </a>
                    <a href="#">
                      <span className="ticket-support">Refund Policy</span>
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="d-flex justify-content-end">
                <img src="https://ecab.io/demov3.0/public/social.webp" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    );
}

export default Footer;
