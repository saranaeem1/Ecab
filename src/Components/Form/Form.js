import React, { useState } from "react";
import "./Form.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const BookingForm = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDropoff1, setShowDropoff1] = useState(false);
  const [showDropoff2, setShowDropoff2] = useState(false);
  const [showDropoff3, setShowDropoff3] = useState(false);
  const [showDropoff4, setShowDropoff4] = useState(false);
  const [showDropoff5, setShowDropoff5] = useState(false);

  const [showOptions2, setShowOptions2] = useState(false);
  const [showPickup1, setShowPickUp1] = useState(false);
  const [showPickup2, setShowPickUp2] = useState(false);
  const [showPickup3, setShowPickUp3] = useState(false);
  const [showPickup4, setShowPickUp4] = useState(false);
  const [showPickup5, setShowPickUp5] = useState(false);
    
  const [numStops, setNumStops] = useState(0);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleOptions2 = () => {
    setShowOptions2(!showOptions2);
  };
  const handleAddStop = () => {
    setNumStops(numStops + 1);
  };

  const showDropoffContent = (dropoffId) => {
    setShowDropoff1(dropoffId === 1);
    setShowDropoff2(dropoffId === 2);
    setShowDropoff3(dropoffId === 3);
    setShowDropoff4(dropoffId === 4);
    setShowDropoff5(dropoffId === 5);
  };

  const showPickUpContent = (pickupId) => {
    setShowPickUp1(pickupId === 1);
    setShowPickUp2(pickupId === 2);
    setShowPickUp3(pickupId === 3);
    setShowPickUp4(pickupId === 4);
    setShowPickUp5(pickupId === 5);
  };

  return (
    <div
      className="col-lg-6 col-md-6 col-12 p-3 d-flex justify-content-center"
      id="Welcome"
    >
      <div className="formContainer bg-silver" style={{ width: "90%" }}>
        <div className="formHeader text-white text-center pt-2">
          <p>BOOK YOUR TRIP NOW</p>
        </div>
        <ul className="list-unstyled d-flex formBar bar align-items-center justify-content-center">
          <li
            className="text-white"
            style={{ backgroundColor: "#90D05B", padding: "20px" }}
          >
            1 Journey
          </li>
          <li className="text-white" style={{ padding: "20px" }}>
            2 Identification
          </li>
          <li className="text-white" style={{ padding: "20px" }}>
            3 Quote
          </li>
          <li className="text-white" style={{ padding: "20px" }}>
            4 Payment
          </li>
        </ul>
        <div className="row mb-3">
          <div
            className="col-lg-6 col-md-6 col-12"
            style={{ width: "48%", margin: "10px" }}
          >
            <Form.Select>
              <option>Service Category</option>
              <option value="1">Recurring</option>
              <option value="2">One Time</option>
            </Form.Select>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12"
            style={{ width: "48%", margin: "10px" }}
          >
            <Form.Select>
              <option>Service</option>
            </Form.Select>
          </div>
        </div>
        <div className="row m-1 align-items-center d-flex">
          <div className="col-lg-2 col-12 ml-3">
            <button
              className="btn text-dark bg-silver d-flex align-items-center font-18"
              onClick={toggleOptions2}
              style={{ width: "100px" }}
            >
              Pick up
            </button>
          </div>
          <div className="col-lg-10 col-12">
            <input
              type="text"
              placeholder="Address"
              style={{ outline: "none", width: "80%", height: "38px" }}
            ></input>
          </div>
        </div>
        {showOptions2 && (
          <div className="row m-1">
            <div className="col-3">
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showPickUpContent(1);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Package
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showPickUpContent(2);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Airport
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center "
                onClick={() => {
                  showPickUpContent(3);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Train
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showPickUpContent(4);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Hotel
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showPickUpContent(5);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Park
              </button>
            </div>
            <div
              className="col-lg-8 col-md-8 col-8 bg-silver d-flex align-items-center justify-content-center py-2"
              style={{ borderRadius: "5px" }}
            >
              {showPickup1 && (
                <div className="" id="pickup1">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option value="1">ONLY AIRPORT TO ASTERIX PARK</option>
                    <option value="1">ASTERIX PARK TO ONLY AIRPORT</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showPickup2 && (
                <div className="my-2" id="pickup2">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">Only Airport</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ outline: "lightblue" }}
                  ></input>
                </div>
              )}
              {showPickup3 && (
                <div className="my-2" id="dropoff3">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">North Station</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showPickup4 && (
                <div className="my-2" id="dropoff4">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">FOUR SEASONS HOTEL GEORGE V</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showPickup5 && (
                <div className="my-2" id="dropoff5">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">ASTERIX PARK</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="row m-1 align-items-center d-flex">
          <div className="col-lg-2 col-12 ml-3">
            <button
              className="btn text-dark bg-silver d-flex align-items-center font-18"
              onClick={toggleOptions}
              style={{ width: "100px" }}
            >
              Drop Off
            </button>
          </div>
          <div className="col-lg-10 col-12">
            <input
              type="text"
              placeholder="Address"
              style={{ outline: "none", width: "80%", height: "38px" }}
            ></input>
          </div>
        </div>
        {showOptions && (
          <div className="row m-1">
            <div className="col-3">
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showDropoffContent(1);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Package
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showDropoffContent(2);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Airport
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center "
                onClick={() => {
                  showDropoffContent(3);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Train
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showDropoffContent(4);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Hotel
              </button>
              <button
                className="btn text-dark bg-silver d-flex align-items-center"
                onClick={() => {
                  showDropoffContent(5);
                }}
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Park
              </button>
            </div>
            <div
              className="col-lg-8 col-md-8 col-8 bg-silver d-flex align-items-center py-3"
              style={{ borderRadius: "5px" }}
            >
              {showDropoff1 && (
                <div className="my-2 p-2" id="dropoff1">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option value="1">ONLY AIRPORT TO ASTERIX PARK</option>
                    <option value="1">ASTERIX PARK TO ONLY AIRPORT</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Zip code"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showDropoff2 && (
                <div className="my-2" id="dropoff2">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">North Station</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Zip code"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showDropoff3 && (
                <div className="my-2" id="dropoff3">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">North Station</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Zip code"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showDropoff4 && (
                <div className="my-2" id="dropoff4">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">FOUR SEASONS HOTEL GEORGE V</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Zip code"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
              {showDropoff5 && (
                <div className="my-2" id="dropoff5">
                  <Form.Select
                    aria-label="Default select example"
                    style={{ width: "100%", marginBottom: "5px" }}
                  >
                    <option>Select</option>
                    <option value="1">ASTERIX PARK</option>
                  </Form.Select>
                  <input
                    type="text"
                    placeholder="Additional Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="Zip code"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                  <input
                    type="text"
                    placeholder="City"
                    style={{ width: "100%", marginBottom: "5px" }}
                  ></input>
                </div>
              )}
            </div>
          </div>
        )}
        {numStops > 0 && (
          <>
            {[...Array(numStops)].map((_, index) => (
              <div key={index} className="row m-1 my-2">
                <div className="col-lg-5 col-md-5 col-11">
                  <input
                    type="text"
                    placeholder="Address"
                    style={{ width: "100%", marginBottom: "5px" }}
                  />
                </div>
                <div className="d-flex col-lg-6 col-md-6 col-12">
                  Waiting Time &nbsp;
                  <input
                    type="time"
                    style={{ width: "50%", marginBottom: "5px" }}
                  />
                </div>
              </div>
            ))}
          </>
        )}
        <div className="row m-1 ">
          <div
            className="d-flex gap-3 align-items-center"
            style={{ width: "60%" }}
          >
            <Form.Check
              type="checkbox"
              id="checkbox-example"
              label="Recurring"
            />
            <Form.Check type="checkbox" id="checkbox-example" label="Return" />
            <Form.Check
              type="checkbox"
              id="checkbox-example"
              label="Wheelchair"
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={handleAddStop}
              variant="none"
              style={{ color: "black" }}
            >
              Add Extra Stop
            </Button>
          </div>
        </div>
        <div className="row d-flex">
          <div className="d-flex col-lg-5 col-md-6 col-11 m-1 ">
            Pickup Date &nbsp;
            <input type="date" style={{ height: "30px" }}></input>
          </div>
          <div className="d-flex col-lg-5 col-md-6 col-11 m-1 ">
            Pickup Time &nbsp;
            <input type="time" style={{ height: "30px" }}></input>
          </div>
        </div>
        <div className="row m-2 ">
          <div className="col-lg-4 col-md-4 col-12">
            <div
              className="text-center my-1"
              style={{ border: "1px solid blue", borderRadius: "5px" }}
            >
              <input type="radio" id="because" />
              &nbsp;
              <label htmlFor="because">Because</label>
              <br />
              <img
                className="my-2"
                src="https://ecab.io/demov3.0/public/car.png"
                style={{ height: "66px" }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div
              className="text-center my-1"
              style={{ border: "1px solid blue", borderRadius: "5px" }}
            >
              <input type="radio" id="van" />
              &nbsp;
              <label htmlFor="van">Van</label>
              <br />
              <img
                className="my-2"
                src="https://ecab.io/demov3.0/public/car.png"
                style={{ height: "66px" }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div
              className="text-center my-1"
              style={{ border: "1px solid blue", borderRadius: "5px" }}
            >
              <input type="radio" id="minibus" /> &nbsp;
              <label htmlFor="minibus">Mini Bus</label>
              <br />
              <img
                className="my-2"
                src="https://ecab.io/demov3.0/public/car.png"
                style={{ height: "66px" }}
              />
            </div>
          </div>
        </div>

        <div className=" d-flex align-items-center justify-content-center m-2">
          <Button className="cardButton">Identification</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
