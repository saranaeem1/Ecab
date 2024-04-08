import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Welcome");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg my-nav p-0">
        <div className="container mb-1" style={{ paddingRight: "0px" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars text-white"></i>
            </span>
          </button>
          <a className="" href="https://ecab.io/demov3.0">
            <img
              src="https://ecab.io/demov3.0/public/logo.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <div className="d-flex flex-column align-items-end">
            <div className="d-flex text-white align-items-center">
              <img
                src="https://ecab.io/demov3.0/public/call-us-girl.png"
                alt=""
                className="img-fluid"
                height="60"
              />
              <div>
                <p className="m-0">
                  <strong style={{ float: "right" }}>
                    INFO AND RESERVATION
                  </strong>
                </p>
                <img
                  src="https://ecab.io/demov3.0/public/phone3.png"
                  className="img-fluid"
                  width="220"
                  height="45px"
                />
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav" style={{ gap: "9px" }}>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Welcome" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#Welcome"
                    onClick={() => handleLinkClick("Welcome")}
                  >
                    Welcome
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Reservation" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#Welcome"
                    onClick={() => handleLinkClick("Reservation")}
                  >
                    Reservation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Services" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#Services"
                    onClick={() => handleLinkClick("Services")}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Park" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#Park"
                    onClick={() => handleLinkClick("Park")}
                  >
                    Park
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Drivers" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#Drivers"
                    onClick={() => handleLinkClick("Drivers")}
                    style={{ alignItems: "center", display: "flex" }}
                  >
                    <img
                      src="https://ecab.io/demov3.0/public/taxi_driver.svg"
                      alt=""
                      width="15"
                      style={{ marginRight: "6px" }}
                    />
                    Drivers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Areas" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Areas")}
                    aria-current="page"
                    href="#Zones"
                  >
                    Areas
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Testimonials" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Testimonials")}
                    aria-current="page"
                    href="#Testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "FAQ" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("FAQ")}
                    aria-current="page"
                    href="#FAQ"
                  >
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === "Contact" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Contact")}
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
