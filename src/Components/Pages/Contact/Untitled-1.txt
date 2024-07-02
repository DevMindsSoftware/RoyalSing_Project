import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
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
// import contactdata from "../../ServerData/contactdata";
// import Functiontext from "../../../Common/Functiontext";

const { TextArea } = Input;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState("large");
  // console.log("setsize", setSize);
  // const [contactadress, setContactadress] = useState([]);
  const [formValues, setFormValues] = useState({
    from_name: "",
    email: "",
    mobileNoo: "",
    cityName: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const MessagesendEmail = () => {
    setLoading(true);
    // console.log("formValues MessagesendEmail =>", formValues);

    if (
      formValues.message &&
      formValues.from_name &&
      formValues.email &&
      formValues.cityName &&
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
            // alert("Sent!");
            toast.success("Email Send successfully!", {
              position: "top-right",
              autoClose: 5000, // Close the toast after 5 seconds
            });
            setLoading(false);
            // console.log("Success send email");
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
      <div className="contactbg" id="contact">
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
            <div className="row">
              <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-12"></div>
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12">
                <div className="container">
                  <div className="form-group">
                    <label className="text-white inputtitle inputtitle">
                      First Name:
                    </label>
                    <Form.Item
                      name="from_name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input
                        className="form-control inputContact"
                        name="from_name"
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <label className="text-white inputtitle">Email:</label>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        {
                          type: "email",
                          message: "please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        className="form-control inputContact"
                        name="email"
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <label className="text-white inputtitle">Mobile:</label>
                    <Form.Item
                      name="mobileNoo"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Mobile Number!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            // console.log(
                            //   "String(value).length",
                            //   String(value).length
                            // );
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
                        name="mobileNoo"
                        onChange={(value) =>
                          handleInputChange({
                            target: { name: "mobileNoo", value },
                          })
                        }
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <label className="text-white inputtitle">City:</label>
                    <Form.Item
                      name="cityName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Enter City!",
                        },
                      ]}
                    >
                      <Input
                        className="form-control inputContact"
                        name="cityName"
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                  </div>
                  <div className="form-group">
                    <label className="text-white inputtitle">Message:</label>
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Enter Message!",
                        },
                      ]}
                    >
                      <TextArea
                        className="form-control inputContact"
                        name="message"
                        onChange={handleInputChange}
                      />
                    </Form.Item>
                  </div>
                  <br />
                  <div className="">
                    {/* <Button
                      type="primary"
                      loading={loading}
                      htmlType="submit"
                      className="devminds-buttoncolorclass "
                      size={size}
                    > */}
                    <Commentbutton
                      text="Submit"
                      endIcon={<SendIcon />}
                      htmlType="submit"
                      className="contactsubmitb"
                    />
                    {/* Submit */}
                    {/* </Button> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-12"></div>
              <br />
              <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
                {/* <div className="contacttextbackground"> */}
                <div className="devminds-ifamemap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.6884389085!2d74.2227299!3d16.6932836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1017a50837dd9%3A0x8a43d5d5d78bfe1c!2sJagdamb%20E%20Seva%20Kendra!5e0!3m2!1sen!2sin!4v1703485521699!5m2!1sen!2sin"
                    // width="600"
                    height="450"
                    style={{ border: "0", width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* </div> */}
              </div>

              {/* <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12">
              <div className="container">
                <div className="form-group buttonsubmistyle">
                  <Button
                    type="primary"
                    loading={loading}
                    htmlType="submit"
                    className="btn btn-primary"
                    size={size}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div> */}
            </div>
            {/* Add ToastContainer from react-toastify */}
            <ToastContainer />
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
