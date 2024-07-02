import React from "react";
import { Row, Col } from "antd";
import Header from "../Header";
import Aboutimage from "../../../images/About.png";
import Aboutimage1 from "../../../images/demo.png";
import Aboutimage2 from "../../../images/aboutimage2.png";
import Functiontext from "../../Functiontext";
// Import the CSS file
import "./about.css";

const About = () => {
  return (
    <div className="maindiv-about">
      <Header />
      <div className="about-container">
        <Row gutter={[16,12]}>
          <Col span={24} className="about-header">
            <h2 className="about-title"> <Functiontext textArray={["ABOUT US"]} /></h2>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="about-image-col">
            <img src={Aboutimage1} alt="about" className="about-image" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="about-image-col">
            <img src={Aboutimage2} alt="about" className="about-image" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="about-image-col">
            <img src={Aboutimage} alt="about" className="about-image" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
