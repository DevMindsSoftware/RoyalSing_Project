import React from "react";
import { Col, Row, Typography } from "antd";
import "./Audience.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Commentbutton from "../Commentbutton";

const { Title, Paragraph } = Typography;

const Audience = () => {
  return (
    <>
      <Row className="container py-3">
        <Col xs={24} sm={24} md={4} lg={6} xl={6}></Col>
        <Col xs={24} sm={24} md={16} lg={12} xl={12}>
          <h3 className="devminds-goalhead">Our dedication</h3>
          <h3 className="devminds-goalhead-2">enriching urban environments.</h3>
          <p className="devminds-focus">
            Our focus is on providing engaging content, convenient services, and
            powerful advertising solutions tailored to the pulse of city life
          </p>
          {/* <Title className="devminds-goalhead">Our dedication</Title>
          <Title className="devminds-goalhead-2">
            enriching urban environments.
          </Title>
          <Paragraph className="devminds-focus">
            Our focus is on providing engaging content, convenient services, and
            powerful advertising solutions tailored to the pulse of city life.
          </Paragraph> */}
          <Commentbutton text="Find audience" endIcon={<SendIcon />} />
        </Col>
        <Col xs={24} sm={24} md={4} lg={6} xl={6}></Col>
      </Row>
    </>
  );
};

export default Audience;
