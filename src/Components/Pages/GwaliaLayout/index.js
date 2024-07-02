import React, { useEffect } from "react";
import { Row, Col } from "antd";
import gwaliplaza from "../../../images/plazaimg.jpg";
import "./wereach.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const GwaliaLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
    <div className="container">
      <div className="devminds-maindivgwalia">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} data-aos="fade-up">
            <div>
              <img
                src={gwaliplaza}
                alt="Gwalia Food Plaza"
                className="devminds-gwaliimge"
              />
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <div className="devminds--textwereach">
                <p className="devminds-wereach-paregraph">
                  <h2 className="devminds-titlerech"> We reach </h2>
                  <br />
                  <span className="devminds-titleacross">
                    across <br />
                    India
                  </span>
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GwaliaLayout;
