import React, { useState } from "react";
import { Menu, Button, Layout, Dropdown, Col, Row, Drawer } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCrown } from "@fortawesome/free-solid-svg-icons";
import crownicon from "../../../images/crown.png"
import { motion } from "framer-motion";
import "./header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const homefunclick = () => {
    navigate("/");
    scrollToTop();
  };
  const aboutfunclick = () => {
    navigate("/about");
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

  const menu = (
    <Menu>
      <Menu.Item key="1">LED Signage</Menu.Item>
      <Menu.Item key="2">LED Signage</Menu.Item>
      <Menu.Item key="3">Acrylic Signage</Menu.Item>
      <Menu.Item key="4">Metal Signage</Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="devmind-navbar">
      <div className="devmind-navcontainer">
        <div className="menu-icon">
          <Row>
            <Col xs={21} sm={21} md={21} lg={24} xl={24}>
              <a className="devminds-mobile-navbar-brand" href="/">
                {/* <FontAwesomeIcon icon={faCrown} /> */}
                <img src={crownicon} className="devminds-imgicon" />
              </a>
            </Col>
            <Col xs={3} sm={3} md={3} lg={24} xl={24}>
              <div className="devminds-mobile-menuicon">
                <Button onClick={showDrawer} className="devminds-menubutton">
                  <MenuOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="devmind-row" align="middle">
          <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <Menu mode="horizontal" className="devmind-menu">
              <Menu.Item key="home" onClick={() => navigate("/")}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <span className="devminds-menustitle">Home</span>
                </motion.div>
              </Menu.Item>
              <Menu.Item key="about" onClick={() => navigate("/about")}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <span className="devminds-menustitle">About Us</span>
                </motion.div>
              </Menu.Item>
              <Menu.Item key="resources" onClick={() => navigate("/gallery")}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <span className="devminds-menustitle">Gallery</span>
                </motion.div>
              </Menu.Item>
            </Menu>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={7}
            lg={7}
            xl={7}
            className="navbar-brand-col"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link className="devminds-navbar-brand" href="/">
                {/* <FontAwesomeIcon icon={faCrown} /> */}
                <img src={crownicon} className="devminds-imgicon" />
              </Link>
            </motion.div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={7}
            lg={7}
            xl={7}
            className="button-group-col"
          >
            <div className="button-group">
              <Dropdown overlay={menu}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link to="/contact">
                    <Button className="devmind-signing">
                    Signage <DownOutlined />
                    </Button>
                  </Link>
                </motion.div>
              </Dropdown>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Link to="/contact">
                  {" "}
                  <Button className="devmind-getintouch" type="primary">
                    Get in touch
                  </Button>
                </Link>
              </motion.div>
            </div>
            <Drawer
              title="Royal sign"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              className="devmind-drawer"
              width={250}
            >
              <Menu mode="vertical">
                <Menu.Item key="home" onClick={onClose}>
                  <span  className="devminds-menustitle" onClick={homefunclick}>
                    Home
                  </span>
                </Menu.Item>
                <Menu.Item key="about" onClick={onClose}>
                  <span  className="devminds-menustitle" onClick={aboutfunclick}>
                    About Us
                  </span>
                </Menu.Item>
                <Menu.Item key="resources" onClick={onClose}>
                  <span className="devminds-menustitle" onClick={galleryfunclick}>
                    Gallery
                  </span>
                </Menu.Item>
                <Menu.Item key="resources" onClick={contactfunclick}>
                  <span className="devminds-menustitle">
                    Contact
                  </span>
                </Menu.Item>
              </Menu>
            </Drawer>
          </Col>
        </Row>
      </div>
    </AntHeader>
  );
};

export default Header;
