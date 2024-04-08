import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Testimonials.css";

function TestimonialsCarousel() {
  return (
    <section
      id="Testimonials"
      className="m-0"
      style={{ background: "rgba(235, 244, 255)", paddingTop: "50px" }}
    >
      <div className="container mt-4 testimonials">
        <div className="text-center my-2">
          <h1 className="servicesHeading">Customer Testimonials</h1>
        </div>
        <div className="px-5">
          <Carousel>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card border-blue">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="d-flex align-items-center mt-1"
                    >
                      <img
                        src="https://ecab.io/demov3.0/public/person2.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img
                        src="https://ecab.io/demov3.0/public/person3.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img
                        src="https://ecab.io/demov3.0/public/person1.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card border-blue">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img
                        src="https://ecab.io/demov3.0/public/person2.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img
                        src="https://ecab.io/demov3.0/public/person3.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 m-1">
                  <div className="card">
                    <div className="card-body px-5">
                      <p className="card-text">
                        Very good service, comfortable car, pleasant driver....I
                        recommend ;)
                      </p>
                      <img
                        src="https://ecab.io/demov3.0/public/five_star.png"
                        alt=""
                      />
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <img
                        src="https://ecab.io/demov3.0/public/person1.png"
                        alt=""
                        width="100"
                        className="m-2"
                      />
                      <h4 className="m-0 text-blue mx-3 my-0">
                        <strong>Fabrice .P</strong>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Button className="cardButton">Reserve Now</Button>
        </div>
      </div>
      {/* Custom CSS for changing the color of carousel controls */}
      <style>
        {`
          .carousel-control-next-icon {
            background-color: #0091d1;
          }
          .carousel-control-prev-icon {
            background-color: #0091d1;
          }
        `}
      </style>
    </section>
  );
}

export default TestimonialsCarousel;
