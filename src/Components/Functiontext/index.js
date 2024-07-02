import React, { useRef, useEffect, useState } from "react";

const Functiontext = ({ textArray }) => {
  const typeJsTextRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    function typeJs() {
      const typeJsText = typeJsTextRef.current;

      if (typeJsText) {
        const currentText = Array.isArray(textArray) ? textArray.join(" ") : "";

        if (isTyping) {
          if (charIndex < currentText.length) {
            typeJsText.innerHTML += currentText.charAt(charIndex);
            setCharIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsTyping(false);
          }
        } else {
          if (charIndex > 0) {
            typeJsText.innerHTML = currentText.substring(0, charIndex - 1);
            setCharIndex((prevIndex) => prevIndex - 1);
          } else {
            setIsTyping(true);
            setCharIndex(0);
            typeJsText.innerHTML = "";
          }
        }
      }
    }

    const intervalId = setInterval(typeJs, 100);

    return () => clearInterval(intervalId);
  }, [charIndex, isTyping, textArray]);

  return <div ref={typeJsTextRef}></div>;
};

export default Functiontext;
