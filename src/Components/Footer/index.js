import { Col, Row, Typography } from "antd";
import React, { useEffect } from "react";
import instaicon from "../../images/instaicon.png";
import facicon from "../../images/facbookicon.png";
import whatsapp from "../../images/whaticon.png";
import "./footer.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

const { Title } = Typography;

const quickLinks = [
  { key: "home", label: "Home", to: "/" },
  { key: "services", label: "Services", to: "/" },
  { key: "branding", label: "Branding", to: "/" },
  { key: "signage", label: "Signage", to: "/" },
  { key: "signage", label: "Gallery", to: "/gallery" },
  { key: "display-stand", label: "Display Stand", to: "/" },
];

const informationLinks = [
  { key: "pricing", label: "Pricing", to: "/" },
  { key: "about-us", label: "About Us", to: "/about" },
  { key: "feedback", label: "Feedback", to: "/" },
];

const legalLinks = [
  { key: "terms-of-use", label: "Terms of Use", to: "/" },
  { key: "license-agreement", label: "License Agreement", to: "/" },
  { key: "privacy-policy", label: "Privacy Policy", to: "/" },
  { key: "copyright-information", label: "Copyright Information", to: "/" },
  { key: "cookies-policy", label: "Cookies Policy", to: "/" },
  { key: "cookies-settings", label: "Cookies Settings", to: "/" },
];

const supportLinks = [
  { key: "faq", label: "FAQ", to: "/" },
  { key: "contact", label: "Contact", to: "/contact" },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="devminds-footermaindive">
      <div>
        <Row>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} data-aos="fade-up">
            <div className="devminds-menuitemmaindiv">
              <Title level={3} className="devminds-titleinfooter1">
                Quick Links
              </Title>
              <div className="devminds-links">
                {quickLinks.map((item) => (
                  <Link key={item.key} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} data-aos="fade-up">
            <div className="devminds-menuitemmaindiv">
              <Title level={3} className="devminds-titleinfooter2">
                INFORMATION
              </Title>
              <div className="devminds-links">
                {informationLinks.map((item) => (
                  <Link key={item.key} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} data-aos="fade-up">
            <div className="devminds-menuitemmaindiv">
              <Title level={3} className="devminds-titleinfooter3">
                LEGAL
              </Title>
              <div className="devminds-links">
                {legalLinks.map((item) => (
                  <Link key={item.key} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={5} lg={5} xl={5} data-aos="fade-up">
            <div className="devminds-menuitemmaindiv">
              <Title level={3} className="devminds-titleinfooter4">
                SUPPORT
              </Title>
              <div className="devminds-links">
                {supportLinks.map((item) => (
                  <Link key={item.key} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4} data-aos="fade-up">
            <div className="devminds-menuitemmaindiv">
              <Title level={3} className="devminds-titleinfooter5">
                SOCIAL MEDIA
              </Title>
              <div className="social-media-icons">
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src={facicon}
                    alt="Facebook"
                    className="devminds-iconnsset2"
                  />
                </a>
                <a
                  href="https://www.instagram.com/royal_sign_/"
                  target="_blank"
                >
                  <img
                    src={instaicon}
                    alt="Instagram"
                    className="devminds-iconnsset"
                  />
                </a>

                <a href="https://wa.me/7057250002" target="_blank">
                  <img
                    src={whatsapp}
                    alt="whatsapp"
                    className="devminds-iconnsset"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr className="devminds-borderfooter" />
      <div className="footerdiv">
        <p className="devminds-footernamecompany">
          Copyright © 2024{" "}
          <a href="#/" className="devminds-ancfoterroyal">
            Royal Sign
          </a>{" "}
          All Rights Reserved. Designed &amp; Maintained by{" "}
          <a
            href="https://devminds.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="devmindsfooter"
          >
            DevMinds Software
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
