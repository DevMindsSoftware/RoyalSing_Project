import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./commercial.css";
import Commentbutton from "../Commentbutton";
import AOS from "aos";
import "aos/dist/aos.css";

const Commercial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  // Function to determine the AOS animation based on screen width
  const getAosAnimation = () => {
    if (window.innerWidth <= 992) {
      return "fade-right";
    } else {
      return "fade-up";
    }
  };

  const leftColumnAos = getAosAnimation();
  const rightColumnAos = window.innerWidth <= 992 ? "fade-up" : "fade-right";

  return (
    <div className="container">
      <Row gutter={12}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} data-aos={leftColumnAos}>
          {/* <Card> */}
            <h2 className="devminds-wemakecommericial">We make all type of</h2>
            <br />
            <h2 className="devminds-commercialtitle">commercial signs</h2>
            <br />
            <p className="devminds-commercialparegraph">
              We collaborate with you to understand your needs and carefully
              craft your signage using professional materials and techniques. We
              put our customers are at the heart of everything we do, so we
              ensure exceptional quality as well as competitive prices. Plus, if
              you have acquired a quote from any other sign maker, we guarantee
              to beat it. For further information, or to learn more, please
              speak with one of our team members today.
            </p>
            <br />
            <a href="https://wa.me/7057250002" target="_blank">
              <Commentbutton
                text="Request a quot"
                endIcon={<SendIcon />}
                className="requestbutton"
              />
            </a>
          {/* </Card> */}
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} data-aos={rightColumnAos}>
          <div className="devminds-button">
            <span className="devminds-titlebutton">LED Signage</span>
            <SendIcon className="icon-end" />
          </div>
          <div className="devminds-button">
            <span className="devminds-titlebutton">3D Signage</span>
            <SendIcon className="icon-end" />
          </div>
          <div className="devminds-button">
            <span className="devminds-titlebutton">Acrylic Signage</span>
            <SendIcon className="icon-end" />
          </div>
          <div className="devminds-button">
            <span className="devminds-titlebutton">Metal Signage</span>
            <SendIcon className="icon-end" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Commercial;
