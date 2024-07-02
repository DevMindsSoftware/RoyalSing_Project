import React, { useEffect } from "react";
import "./Signs.css";
import { Col, Row } from "antd";
import { Card } from "antd";
import drill from "../../../images/drill.jpg";
import sign from "../../../images/sign.jpg";
import poster from "../../../images/poster.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const { Meta } = Card;

const Signs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="container devminds-maindivsign">
      <Row gutter={12}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} data-aos="fade-up">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="motion-div"
          >
            <Card className="devminds-signs-card" hoverable>
              <img alt="example" src={drill} className="devminds-signimg" />
            </Card>
          </motion.div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={8}
          xl={8}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="motion-div"
          >
            <Card className="devminds-signs-card" hoverable>
              <img alt="example" src={sign} className="devminds-signimg" />
            </Card>
          </motion.div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={8}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="motion-div"
          >
            <Card className="devminds-signs-card" hoverable>
              <img alt="example" src={poster} className="devminds-signimg" />
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Signs;
