import React, { useState } from "react";
import { Form, Input, InputNumber, Button, Row, Col } from "antd";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import Header from "../Header";
import SendIcon from "@mui/icons-material/Send";
import Commentbutton from "../Commentbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Functiontext from "../../Functiontext";
import {
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  const [formValues, setFormValues] = useState({
    from_name: "",
    Last_name: "",
    mobileNoo: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const MessagesendEmail = () => {
    setLoading(true);
    if (
      formValues.message &&
      formValues.from_name &&
      formValues.Last_name &&
      formValues.mobileNoo
    ) {
      // const serviceID = "service_94bhhvd";
      // const templateID = "template_8fqtqo1";
      // const APIkeys = "Cv0H2fUdplt4cjHo1";
      const serviceID = "";
      const templateID = "";
      const APIkeys = "";
      const formElement = document.getElementById("form");

      emailjs
        .sendForm(serviceID, templateID, formElement, APIkeys, formValues)
        .then(
          () => {
            toast.success("Email Send successfully!", {
              position: "top-right",
              autoClose: 5000, // Close the toast after 5 seconds
            });
            setLoading(false);
            document.getElementById("form").reset();
            formElement.reset();
          },
          (err) => {
            alert(JSON.stringify(err));
            toast.error("Email Not Send!", {
              position: "top-right",
              autoClose: 5000, // Close the toast after 5 seconds
            });
          }
        );
    }
  };

  return (
    <>
      <Header />
      <div className="devminds-contactbg" id="contact">
        <div className="container pt-5">
          <h4
            className="text-dark contactmaintitle"
            style={{
              paddingLeft: "11px",
              paddingBottom: "50px",
            }}
          >
            <Functiontext textArray={["Get In Touch"]} />
          </h4>
        </div>
        <div className="container">
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            onFinish={MessagesendEmail}
            autoComplete="off"
            id="form"
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={5} lg={5} xl={5}></Col>
              <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                <div className="container devminds-contact">
                  <Row gutter={16} className="devminds-Regform">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <Form.Item
                        name="from_name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your First Name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="First name"
                          className="form-control inputContact"
                          name="from_name"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                      <Form.Item
                        name="Last_name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Last Name!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Last name"
                          className="form-control inputContact"
                          name="Last_name"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    name="mobileNoo"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Mobile Number!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || String(value).length === 10) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Please input 10 numbers!")
                          );
                        },
                      }),
                    ]}
                  >
                    <InputNumber
                      className="form-control inputContact"
                      placeholder="Mobile no"
                      name="mobileNoo"
                      onChange={(value) =>
                        handleInputChange({
                          target: { name: "mobileNoo", value },
                        })
                      }
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Message!",
                      },
                    ]}
                  >
                    <TextArea
                      className="form-control inputContact"
                      placeholder="Message"
                      name="message"
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  <div>
                    <Commentbutton
                      text="Submit"
                      endIcon={<SendIcon />}
                      htmlType="submit"
                      className="contactsubmitb"
                    />
                  </div>
                  <p className="devminds-social">Royal sing</p>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      className="devminds-handles"
                      href="https://www.instagram.com/royal_sign_/"
                      target="_blank"
                    >
                      <InstagramOutlined />
                    </Button>
                    &nbsp;
                    <Button
                      className="devminds-handles"
                      href="https://wa.me/7057250002"
                      target="_blank"
                    >
                      <WhatsAppOutlined />
                    </Button>
                    &nbsp;
                    <Button className="devminds-handles" href="https://www.facebook.com/" target="_blank">
                      <FacebookOutlined />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={5} lg={5} xl={5}></Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="devminds-ifamemap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.6884389085!2d74.2227299!3d16.6932836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1017a50837dd9%3A0x8a43d5d5d78bfe1c!2sJagdamb%20E%20Seva%20Kendra!5e0!3m2!1sen!2sin!4v1703485521699!5m2!1sen!2sin"
                    height="450"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
            <ToastContainer />
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;