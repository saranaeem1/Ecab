import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <header className="d-none d-sm-block bg-blue1">
        <Container>
          <Row className="align-items-center">
            <Col
              lg={8}
              md={6}
              xs={12}
              className="d-flex justify-content-between"
            >
              <ul className="d-flex m-0 p-1 list-unstyled align-items-center gap-4">
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <img
                      className="img-fluid clients-img"
                      src="https://ecab.io/demov3.0/public/driver.png"
                      width="30"
                      alt="Driver"
                      style={{ border: "1px solid white", borderRadius: "50%" }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Driver
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <img
                      className="img-fluid clients-img"
                      src="https://ecab.io/demov3.0/public/jobs.png"
                      style={{ borderRadius: "50%", border: "1px solid white" }}
                      width="30"
                      alt="Job"
                    />
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Job
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <img
                      className="img-fluid clients-img"
                      src="https://ecab.io/demov3.0/public/partner.png"
                      width="30"
                      alt="Partner"
                      style={{ borderRadius: "50%", border: "1px solid white" }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Partner
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <img
                      className="img-fluid clients-img"
                      src="https://ecab.io/demov3.0/public/affiliate.png"
                      width="30"
                      alt="Affiliated"
                      style={{ borderRadius: "50%", border: "1px solid white" }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Affiliated
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    <img
                      className="img-fluid clients-img clients-img-style"
                      src="https://ecab.io/demov3.0/public/client.png"
                      width="30"
                      alt="Customer"
                      style={{ borderRadius: "50%", border: "1px solid white" }}
                    />
                    <span
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "13px",
                      }}
                    >
                      Customer
                    </span>
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <p
                  className="text-white m-0"
                  style={{
                    fontSize: "10px",
                    lineHeight: "12px",
                    fontWeight: 700,
                  }}
                >
                  Download our <br />
                  mobile application
                </p>
                <img
                  className="img-fluid"
                  src="https://ecab.io/demov3.0/public/arrow.png"
                  alt=""
                  width="42"
                />
                <img
                  className="img-fluid"
                  src="https://ecab.io/demov3.0/public/android-app.png"
                  alt=""
                  width="90"
                />
                &nbsp;
                <img
                  className="img-fluid"
                  src="https://ecab.io/demov3.0/public/ios-app.png"
                  alt=""
                  width="90"
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center p-0">
              <select className="form-control-my">
                <option value="2" style={{ color: "black" }}>
                  €Euro
                </option>
                <option value="3" style={{ color: "black" }}>
                  $Dollar
                </option>
              </select>
              <Dropdown>
                <Dropdown.Toggle
                  className="font-15 text-white"
                  id="dropdown-basic"
                  variant="none"
                  style={{ marginRight: "4px" }}
                >
                  <img
                    className="img-fluid"
                    src="https://ecab.io/demov3.0/public/french-flag.png"
                    width="25"
                    alt=""
                  />
                  English
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <img
                      src="https://ecab.io/demov3.0/public/english-flag.png"
                      alt=""
                    />{" "}
                    English111
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <img
                      src="https://ecab.io/demov3.0/public/french-flag.png"
                      width="32"
                      alt=""
                    />{" "}
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="d-flex align-items-center p-0 gap-3">
              <Button
                variant="none"
                className="font-13"
                style={{
                  padding: "6px 5px",
                  border: "1px solid #fff",
                  fontWeight: "bold",
                  backgroundColor: "#fb2c79",
                  color: "#fff",
                }}
              >
                Register
              </Button>
              <Button
                variant="none"
                className="font-13"
                style={{
                  padding: "6px 5px",
                  border: "1px solid #fff",
                  fontWeight: "bold",
                  backgroundColor: "#13d014",
                  color: "#fff",
                }}
              >
                Connection
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header
