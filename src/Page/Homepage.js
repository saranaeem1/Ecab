import React from "react";
import Header from "../Components/Header/Header";
import Button from "react-bootstrap/Button";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Homepage.css";
import Footer from "../Components/Footer/Footer";
import BannerSection from "../Components/Banner/Banner";
import BookingForm from "../Components/Form/Form";
import { FaEnvelope } from "react-icons/fa";
import { FaFax } from "react-icons/fa";
import { FaLifeRing } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import Faq from "../Components/Faq/Faq";
import TestimonialsCarousel from "../Components/Testimonials/Testimonials";
import Navbar from "../Components/Navbar/Navbar";
import Offerbar from "../Components/Offerbar/Offerbar";

const Homepage = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Offerbar */}
      <Offerbar />

      {/* Booking Section */}

      <div
        className="row p-0 m-0"
        style={{
          background:
            "radial-gradient(circle, #00c4fb 0, #0091d1 39%, #003e7c 100%)",
        }}
      >
        <BookingForm />
        <BannerSection />
      </div>

      <section
        className="m-0"
        style={{
          background:
            "transparent linear-gradient(#fbfbfb,#ececec,#cecece) repeat scroll 0 0",
          borderTop: "2px solid #fff",
        }}
      >
        <Container>
          <Row className="align-items-center gap-3 gap-sm-0  text-blue">
            <Col
              lg={4}
              md={4}
              xs={12}
              className="d-flex align-items-center blue-back py-3 justify-content-center my-1"
            >
              <h3 className="m-0">
                <b>GET STARTED IN 4 STEPS</b>
              </h3>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <h4
                className="m-0 d-flex justify-content-center align-items-center "
                style={{ marginLeft: "30px" }}
              >
                Punctuality
              </h4>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <h4 className="m-0 d-flex justify-content-center align-items-center">
                Security
              </h4>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <h4 className="m-0 d-flex justify-content-center align-items-center">
                Quality
              </h4>
            </Col>
            <Col lg={2} md={2} xs={12}>
              <h4 className="m-0 d-flex justify-content-center align-items-center">
                Economy
              </h4>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mini-data m-0" style={{ overflowX: "hidden" }}>
        <Container>
          <div className="row align-items-center gap-3 gap-sm-0 py-3">
            <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-center blue-back my-1 align-items-center">
              <h3 className="m-0 py-2">Testimonials from our customers</h3>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="active"
                    aria-current="true"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="carousel-item d-flex gap-3"
                    data-bs-interval="2000"
                  >
                    <div>
                      <img
                        src="https://ecab.io/demov3.0/public/person2.png"
                        alt=""
                        className="img-fluid"
                        width="60"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="m-0 p-2">
                        Very good service, the driver was punctual and friendly
                      </p>
                      <div className="d-flex align-items-center">
                        <p className="m-0">
                          <strong>Janet Heartly</strong>
                        </p>
                        <img
                          src="https://ecab.io/demov3.0/public/five_star.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="carousel-item d-flex gap-3 active"
                    data-bs-interval="2000"
                  >
                    <div>
                      <img
                        src="https://ecab.io/demov3.0/public/person1.png"
                        alt=""
                        className="img-fluid"
                        width="60"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <p className="m-0 p-2">
                        The Best shuttle transfer I got in Paris, Thank you
                        HANDI
                      </p>
                      <div className="d-flex align-items-center">
                        <p className="m-0">
                          <strong>Sarah Evens</strong>
                        </p>
                        <img
                          src="https://ecab.io/demov3.0/public/five_star.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*Services*/}

      <section
        className="m-0"
        style={{ background: "rgba(235, 244, 255)", paddingTop: "50px" }}
        id="Services"
      >
        <div className="classesContainer">
          <h1 className="servicesHeading">Our Services</h1>
          <div className="card-container">
            <Card
              style={{
                width: "19rem",
                margin: "10px",
                border: "1px solid #2ba5c9",
              }}
            >
              <div className="wrap1">
                <div class="ribbon5">
                  <span class="promo-service">
                    <p>Promotion</p>
                  </span>
                </div>
              </div>
              <Card.Title className="cardHeader">Private Transport</Card.Title>
              <Card.Img
                className="cardImage"
                variant="top"
                src="https://ecab.io/demov3.0/public/featured-pic1.jpeg"
                style={{ borderBottom: "1px solid #0091d1" }}
              />
              <Card.Body className="cardBody">
                <Card.Text>
                  As a worker with a disability, you are legitimately looking
                  for adapted transport to carry out all your business trips.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="cardButton">Reserve Now</Button>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "19rem",
                margin: "10px",
                border: "1px solid #2ba5c9",
              }}
            >
              <div className="wrap1">
                <div class="ribbon5">
                  <span class="promo-service">
                    <p>Promotion</p>
                  </span>
                </div>
              </div>
              <Card.Title className="cardHeader">SHUTTLE TRANSPORT</Card.Title>
              <Card.Img
                className="cardImage img-fluid"
                variant="top"
                src="https://ecab.io/demov3.0/public/featured-pic2.jpeg"
                style={{ borderBottom: "1px solid #0091d1" }}
              />
              <Card.Body className="cardBody">
                <Card.Text>
                  As a worker with a disability, you are legitimately looking
                  for adapted transport to carry out all your business trips.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="cardButton">Reserve Now</Button>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "19rem",
                margin: "10px",
                border: "1px solid #2ba5c9",
              }}
            >
              <div className="wrap1">
                <div class="ribbon5">
                  <span class="promo-service">
                    <p>Promotion</p>
                  </span>
                </div>
              </div>
              <Card.Title className="cardHeader">
                PROFESSIONAL TRANSPORT
              </Card.Title>
              <Card.Img
                className="cardImage"
                variant="top"
                src="https://ecab.io/demov3.0/public/featured-pic3.jpeg"
                style={{ borderBottom: "1px solid #0091d1" }}
              />
              <Card.Body className="cardBody">
                <Card.Text>
                  As a worker with a disability, you are legitimately looking
                  for adapted transport to carry out all your business trips.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="cardButton">Reserve Now</Button>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: "19rem",
                margin: "10px",
                border: "1px solid #2ba5c9",
              }}
            >
              <div className="wrap1">
                <div class="ribbon5">
                  <span class="promo-service">
                    <p>Promotion</p>
                  </span>
                </div>
              </div>
              <Card.Title className="cardHeader">
                SCHOOL TRANSPORTATION
              </Card.Title>
              <Card.Img
                className="cardImage"
                variant="top"
                src="https://ecab.io/demov3.0/public/featured-pic4.jpeg"
                style={{ borderBottom: "1px solid #0091d1" }}
              />
              <Card.Body className="cardBody">
                <Card.Text>
                  As a worker with a disability, you are legitimately looking
                  for adapted transport to carry out all your business trips.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="cardButton">Reserve Now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      {/*Drivers*/}
      <section
        style={{ background: "rgba(235, 244, 255)", paddingTop: "50px" }}
        id="Park"
        className="m-0"
      >
        <div className="classesContainer ">
          <h1 className="servicesHeading">Our Vehicles</h1>
          <div className="card-container">
            <Card
              style={{
                width: "20rem",
                margin: "10px",
              }}
            >
              <Card.Title className="cardHeader">Caddy Maxi (Car)</Card.Title>
              <Card.Img
                className="cardImage"
                style={{
                  background: "linear-gradient(#FBFBFB, #ECECEC, #CECECE)",
                  borderBottom: "1px solid #0091d1",
                }}
                variant="top"
                src="https://ecab.io/demov3.0/public/cards-caddy1.png"
              />
              <Card.Body className="cardBody">
                <Card.Text
                  style={{
                    textAlign: "center",
                    color: "#2ba5c9",
                    fontWeight: "bold",
                  }}
                >
                  Vehicles details
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Model:</span>&nbsp;CADDY
                  MAXI (Car)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Wheelchair:</span>
                  &nbsp;Yes (Car)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Setup 1:</span>&nbsp;4{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  12{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  12
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Configuration 2:</span>
                  &nbsp;3{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  21{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  52
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "20rem", margin: "10px" }}>
              <Card.Title className="cardHeader">
                PEUGEOT EXPERT (VAN)
              </Card.Title>
              <Card.Img
                className="cardImage"
                style={{
                  background: "linear-gradient(#FBFBFB, #ECECEC, #CECECE)",
                }}
                variant="top"
                src="https://ecab.io/demov3.0/public/cards-caddy2.png"
              />
              <Card.Body className="cardBody">
                <Card.Text
                  style={{
                    textAlign: "center",
                    color: "#2ba5c9",
                    fontWeight: "bold",
                  }}
                >
                  Vehicles details
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Model:</span>
                  &nbsp;Peugeot Expert (Van)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Wheelchair:</span>
                  &nbsp;Yes (Car)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Setup 1:</span>&nbsp;4{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  12{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  12
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Configuration 2:</span>
                  &nbsp;3{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  21{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  52
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "20rem", margin: "10px" }}>
              <Card.Title className="cardHeader">
                FLAT DUCATO (MINIBUS)
              </Card.Title>
              <Card.Img
                className="cardImage"
                style={{
                  background: "linear-gradient(#FBFBFB, #ECECEC, #CECECE)",
                }}
                variant="top"
                src="https://ecab.io/demov3.0/public/cards-caddy3.png"
              />
              <Card.Body className="cardBody">
                <Card.Text
                  style={{
                    textAlign: "center",
                    color: "#2ba5c9",
                    fontWeight: "bold",
                  }}
                >
                  Vehicles details
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Model:</span>&nbsp;FLAT
                  DUCATO (MINIBUS)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Wheelchair:</span>
                  &nbsp;Yes (Car)
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Setup 1:</span>&nbsp;4{" "}
                  <img
                    style={{ width: "20px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  12{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  12
                </Card.Text>
                <Card.Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>Configuration 2:</span>3{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/sitting-on-chair.png"
                  ></img>{" "}
                  21{" "}
                  <img
                    style={{ width: "18px", marginBottom: "3px" }}
                    src="https://ecab.io/demov3.0/public/cat-footprint.png"
                  ></img>{" "}
                  52
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Button className="cardButton">Reserve Now</Button>
          </div>
        </div>
      </section>

      <section
        className="drivers m-0"
        id="Drivers"
        style={{ background: "rgba(235, 244, 255)", paddingTop: "50px" }}
      >
        <div className="container">
          <h1 className="servicesHeading">Our Drivers</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p>
                CAB ACCESS is a company specializing in the transport of people
                with reduced mobility, which offers many services to help you in
                daily life. Indeed, having adapted vehicles accessible to people
                in wheelchairs, disabled, or elderly, they accompany you on your
                journeys. Whether you have errands to run, a medical
                appointment, or professional meetings, they will take you safely
                from one point to another. CAB ACCESS makes it a point of honor
                to provide you with a quality service by providing you with
                trained, qualified, and pleasant drivers.
              </p>
              <ul className="list-unstyled d-flex">
                <div className="m-3">
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Qualified
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Trained
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Framed
                  </li>
                </div>
                <div className="m-3">
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Humans
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Pleasant
                  </li>
                  <li style={{ fontWeight: "bold" }}>
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      disabled
                    />
                    Smiling
                  </li>
                </div>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img
                className="img-fluid"
                src="https://ecab.io/demov3.0/public/car_block.png"
                alt=""
              />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Button className="cardButton">Reserve Now</Button>
          </div>
        </div>
      </section>

      <section
        id="Zones"
        className="m-0"
        style={{ background: "rgba(235, 244, 255)", paddingTop: "50px" }}
      >
        <div class="container mt-4">
          <div class="text-center my-2">
            <h1 className="servicesHeading">INTERVENTION AREAS</h1>
            <p>
              We operate throughout the Paris region and on journeys to or from
              the Paris region to any other region of France.
            </p>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-12">
              <img
                class="img-fluid"
                src="https://ecab.io/demov3.0/public/zones.png"
                alt=""
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <Button className="cardButton">Reserve Now</Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <Faq />

      <section className="bg-silver payment">
        <div className="container">
          <div className="row py-1">
            <div className="col d-flex flex-column justify-content-center align-items-center bg-blue text-white text-uppercase why-us why-us1">
              <h4 className="m-0 ">OUR ACCEPT</h4>
              <h4 className="m-0 text-center">THESE PAYMENT METHODS</h4>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="row text-blue-cab text-center">
                <div className="col-sm">
                  <h6 className="blue">SPECIES</h6>
                  <img
                    className="img-fluid"
                    src="https://ecab.io/demov3.0/public/cash.png"
                    alt="Cash Payment"
                    title="Cash Payment"
                    width="100"
                  />
                </div>
                <div class="col-sm">
                  <h6 className="blue">BANK CARD</h6>

                  <img
                    class="img-fluid"
                    src="https://ecab.io/demov3.0/public/credit-card.png"
                    alt="Cash Payment"
                    title="Cash Payment"
                    width="100"
                  />
                </div>
                <div class="col-sm">
                  <h6 className="blue">CHECK</h6>
                  <img
                    class="img-fluid"
                    src="https://ecab.io/demov3.0/public/checqueGrey.png"
                    alt="Cash Payment"
                    title="Cash Payment"
                    width="100"
                  />
                </div>
                <div class="col-sm">
                  <h6 className="blue">BANK TRANSFER</h6>
                  <img
                    class="img-fluid"
                    src="https://ecab.io/demov3.0/public/viremantGrey.png"
                    alt="Cash Payment"
                    title="Cash Payment"
                    width="100"
                  />
                </div>
                <div class="col-sm">
                  <h6 className="blue">BANK DEBIT</h6>
                  <img
                    class="img-fluid"
                    src="https://ecab.io/demov3.0/public/bankingStandGrey.png"
                    alt="Cash Payment"
                    title="Cash Payment"
                    width="100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-silver" style={{ borderBottom: "1px solid white" }}>
        <div class="container">
          <div class="row py-1">
            <div class="col d-flex flex-column justify-content-center bg-blue text-white text-uppercase why-us why-us1 align-items-center">
              <h4 class="m-0">
                <b>Our partners</b>
              </h4>
              <h4 class="m-0">
                <b>and our customers</b>
              </h4>
            </div>
            <div class="col-md-9 col-sm-12">
              <div class="d-flex justify-content-center">
                <div class="marquee">
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners1.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners2.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners3.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners4.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners5.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners1.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners2.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners3.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners4.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img
                        class="img-fluid"
                        src="https://ecab.io/demov3.0/public/partners5.png"
                        alt="Partner"
                        width="200"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        <div
          className="container-fluid"
          style={{
            background:
              "rgba(0, 0, 0, 0) linear-gradient(to bottom, #4c4c52, #27272b)",
            margin: 0,
            padding: 0,
          }}
        >
          <div className="row py-2">
            <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
              <div className="row px-4">
                <div className="col-sm">
                  <a href="#" className="text-white text-decoration-none">
                    <span className="send-us-email">
                      <FaEnvelope />
                      &nbsp; contact@handio.fr
                    </span>
                  </a>
                </div>
                <div className="col-sm">
                  <a href="" className="text-decoration-none">
                    <span className="call-us text-white">
                      <FaFax />
                      &nbsp;Fax 0183628404
                    </span>
                  </a>
                </div>
                <div className="col-sm">
                  <a className="live-assistance text-white text-decoration-none">
                    <FaLifeRing />
                    &nbsp; Live Support
                  </a>
                </div>
                <div className="col-sm">
                  <a href="#" className="text-white text-decoration-none">
                    <span className="ticket-support">
                      <FaTicketAlt />
                      &nbsp; Ticket Support
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Homepage;
