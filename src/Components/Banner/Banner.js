import React, {useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const BannerSection = () => {
    useEffect(() => {
      const spans = document.querySelectorAll(".bannerText h5 span");
      spans.forEach((span, index) => {
        span.style.setProperty("--i", index);
      });
    }, []);
  return (
    <div className="col-lg-6 col-md-6 col-12 d-flex flex-column position-relative p-3">
      <div>
        <div className="bannerText">
          <h5 className="p-2 text-white">
            {`TRANSPORT ADAPTÉ POUR PERSONNES À MOBILITÉ RÉDUITE PERSONNES HANDICAPÉES ET PERSONNES AGÊES TOUT TYPE DE TRAJET - TOUTE DISTANCE VÉHICULES ACCESSIBLES EN FAUTEUIL |`
              .split("")
              .map((char, index) => (
                <span key={index}>{char}</span>
              ))}
          </h5>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <img
          className=""
          src="https://ecab.io/demov3.0/public/banner_sub1.png"
          alt=""
          width="100"
        />
        <img
          src="https://ecab.io/demov3.0/public/banner_sub2.png"
          alt=""
          width="200"
          height="100"
        />
        <img
          src="https://ecab.io/demov3.0/public/banner_sub3.png"
          alt=""
          width="100"
        />
      </div>
      <div className="row align-items-center gap-3 gap-sm-0 text-white my-3">
        <div className="col-sm">
          <div className="m-0 d-flex justify-content-center align-items-center data-align font-15">
            <img
              className="img-fluid border-white"
              src="https://ecab.io/demov3.0/public/3-easy-steps.png"
              alt=""
            />
            &nbsp;
            <p style={{ fontWeight: "bold" }}>ADVANCED VEHICLES</p>
          </div>
        </div>
        <div className="col-sm">
          <div className="m-0 d-flex justify-content-center align-items-center font-15">
            <img
              className="img-fluid border-white"
              src="https://ecab.io/demov3.0/public/qualified-drivers.png"
              alt=""
            />
            &nbsp;
            <p style={{ fontWeight: "bold" }}>QUALIFIED DRIVERS</p>
          </div>
        </div>
        <div className="col-sm">
          <div className="m-0 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid border-white"
              src="https://ecab.io/demov3.0/public/affordable-prices.png"
              alt=""
            />
            &nbsp; <p style={{ fontWeight: "bold" }}>AFFORDABLE PRICES</p>
          </div>
        </div>
      </div>
      <img
        src="https://ecab.io/demov3.0/public/assessible.png"
        style={{
          width: "60px",
          borderRadius: "8px",
          border: "2px solid #fff",
          position: "absolute",
          top: "350px",
        }}
      />
      <div className="row justify-content-center mt-2 p-2">
        <Carousel fade>
          <Carousel.Item>
            <img
              src="https://ecab.io/demov3.0/public/banner.png"
              alt=""
              className="img-fluid"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://ecab.io/demov3.0/public/banner1.png"
              alt=""
              className="img-fluid"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://ecab.io/demov3.0/public/banner2.png"
              alt=""
              className="img-fluid"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerSection;
