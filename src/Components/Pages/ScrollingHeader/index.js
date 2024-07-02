// import React, { useState, useEffect } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, Typography, Menu } from "antd";
import {
  HomeOutlined,
  ShoppingOutlined,
  CameraOutlined,
  PhoneOutlined,
  BellOutlined,
  FileOutlined,
} from "@ant-design/icons";
// Assuming you're importing CSS for .devminds-visible and .devminds-hidden
import "./scrollingheader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import crownicon from "../../../images/crown.png";
import "aos/dist/aos.css";
const { Title } = Typography;
const ScrollingHeader = () => {
  // State to manage whether the header is scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  // Event listener for scroll events
  const listenScrollEvent = () => {
    if (window.scrollY > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Hook to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const homefunclick = () => {
    navigate("/");
    scrollToTop();
  };
  const galleryfunclick = () => {
    navigate("/gallery");
    scrollToTop();
  };
  const contactfunclick = () => {
    navigate("/contact");
    scrollToTop();
  };
  const Aboutfunclick = () => {
    navigate("/about");
    scrollToTop();
  };

  return (
    // Apply dynamic class based on scroll position
    <div
      className={isScrolled ? "devminds-visible" : "devminds-hidden"}
      data-aos="fade-down"
    >
      <Row className="scrollingheaderstyle">
        <Col xs={12} sm={12} md={7} lg={7} xxl={7}>
          <div className="logo mt-3">
            {/* <Title level={2} className='logofontstyle'>अण्णा बुलेट</Title> */}
            <div className="scrolling-header-logo-block">
              {/* <FontAwesomeIcon
                icon={faCrown}
                className="scrolling-header-icon"
              /> */}
              <img src={crownicon} className="devminds-imgiconscrolling" />
              {/* <img src={logo}  className='scrolling-header-image'/> */}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={17}
          lg={17}
          xxl={17}
          className="navbarscrollingdesign"
        >
          <Menu
            theme=""
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            className="navbaritemforscrollingheader"
          >
            <Menu.Item
              key="1"
              style={{ color: "black" }}
              className="menuforscrollingheader"
              onClick={homefunclick}
            >
              <HomeOutlined className="iconscrollingheader" /> Home
            </Menu.Item>

            <Menu.Item
              key="2"
              style={{ color: "black" }}
              className="menuforscrollingheader"
            >
              <ShoppingOutlined className="iconscrollingheader" /> Shop
            </Menu.Item>
            <Menu.Item
              key="3"
              className="menuforscrollingheader"
              onClick={Aboutfunclick}
            >
              {" "}
              <FileOutlined className="iconscrollingheader" /> About
            </Menu.Item>

            <Menu.Item
              key="4"
              style={{ color: "black" }}
              className="menuforscrollingheader"
              onClick={galleryfunclick}
            >
              <CameraOutlined className="iconscrollingheader" /> Gallery
            </Menu.Item>

            <Menu.Item
              key="5"
              style={{ color: "black" }}
              className="menuforscrollingheader"
              onClick={contactfunclick}
            >
              {" "}
              <PhoneOutlined className="iconscrollingheader" /> Contact
            </Menu.Item>

            <Menu.Item
              key="6"
              style={{ color: "black" }}
              className="menuforscrollingheader"
            >
              {" "}
              <BellOutlined className="iconscrollingheader" /> New Arrivals
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default ScrollingHeader;
