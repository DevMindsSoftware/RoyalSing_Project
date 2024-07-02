import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import SendIcon from "@mui/icons-material/Send";
import "./Shopprovides.css";
import Commentbutton from "../Commentbutton";
import RBimg from "../../../images/RBimg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Shopprovides = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
  const rightColumnAos = window.innerWidth <= 992 ? "fade-up" : "fade-left";

  return (
    <div className="container">
      <Card>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16} data-aos={leftColumnAos}>
            <h2 className="devminds-shopprovides">The sign shop provides </h2>
            <br />
            <h2 className="devminds-shopprovidestitle">
              innovative and lively designs
            </h2>
            <br />
            <p className="devminds-shopprovidesparegraph">
              The sign shop knows how to boost your sales or business. We will
              use its techniques of innovation to design a perfect sign for your
              business that will attract your customers. We deal with anything
              that includes graphics like posters, banners, and brochures.
              Contact us for more information.
            </p>
            <br />
            <Commentbutton
              text="Call No"
              endIcon={<SendIcon />}
              className="devminds-CallNobutton"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} data-aos={rightColumnAos} className="text-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <div className="devminds-rbimg">
              <img src={RBimg} className="devminds-Rbimageset" alt="Shop" />
              </div>
              
            </motion.div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Shopprovides;
