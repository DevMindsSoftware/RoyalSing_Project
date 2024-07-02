import React, { useEffect } from "react";
import { Rate, Typography } from "antd";
import "./feedback.css";
import AOS from "aos";
import "aos/dist/aos.css";

const { Title, Text } = Typography;

const Feedback = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  return (
    <div className="background">
      <Title className="devminds-title" data-aos="fade-up" level={2}>
        lovely feedback from our client
      </Title>
      <div className="feedback-container">
        <div className="feedback-card" data-aos="fade-up">
          <Rate disabled defaultValue={4} />
          <br />
          <Text className="feedback-text">
            Very professional and
            <br /> understanding and fast
          </Text>
          <br />
          <Text className="feedback-text">-Mr. Patil</Text>
        </div>
        <br />
        <div className="feedback-card" data-aos="fade-up">
          <Rate disabled defaultValue={3} />
          <br />
          <Text className="feedback-text">
            Very professional and
            <br /> understanding and fast
          </Text>
          <br />
          <Text className="feedback-text">-Mr. Patil</Text>
        </div>
        <div className="feedback-card" data-aos="fade-up">
          <Rate disabled defaultValue={2} />
          <br />
          <Text className="feedback-text" >
            Very professional and
            <br /> understanding and fast
          </Text>
          <br />
          <Text className="feedback-text">-Mr. Patil</Text>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
