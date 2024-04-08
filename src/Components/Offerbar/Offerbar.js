import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Offerbar.css";

const Offerbar = () => {
  return (
    <section
      style={{
        backgroundColor: "#13d014",
        borderTop: "2px solid white",
        borderBottom: "2px solid white",
        padding: "8px"

      }}
    >
      <Container>
        <Row className="py-1 align-items-center">
          <Col
            lg={1}
            md={1}
            className="d-flex align-items-center justify-content-start d-none d-sm-block"
          >
            <div
              className="pulse-btn bg-blue text-center"
              style={{
                width: "160px",
                zIndex: 20,
                position: "relative",
                borderRadius: "30px",
                padding: "5px",
                border: "2px solid white",
              }}
            >
              <span
                className="d-flex align-items-center"
                style={{
                  background:
                    "linear-gradient(to bottom, #44c0e5 0%, #35add1 39%, #0d85a8 100%) !important",
                }}
              >
                <img
                  src="https://ecab.io/demov3.0/public/megaphone.svg"
                  width="25"
                  alt=""
                />
                &nbsp; Announcement
              </span>
            </div>
          </Col>
          <Col
            lg={10}
            md={10}
            className="d-flex align-items-center"
            style={{ paddingLeft: "3rem" }}
          >
            <marquee direction="left">
              <strong className="text-white">
                SPECIAL and LIMITED OFFER -10% ON YOUR FIRST BOOKING
              </strong>
            </marquee>
          </Col>
          <Col
            lg={1}
            md={1}
            className="d-flex align-items-center justify-content-start m-0 p-0 d-none d-sm-block"
          >
            <div
              className="pulse-btn text-center"
              style={{ backgroundColor: "#fb2c79", borderRadius:"25px", border:"2px solid white"}}
            >
              <span className="pulse text-white" style={{ fontWeight: "bold" , padding:"4px"}}>
                I Profile
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offerbar;
