import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./commenbutton.css";
import { motion } from "framer-motion";

const Commentbutton = ({ text, endIcon, className ,htmlType }) => {
  return (
    <div>
      <div className={`devminds-audbtn ${className}`}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Button
          className={`devminds-audience ${className}`}
          variant="contained"
          endIcon={endIcon}
          type={htmlType}
        >
          <span className="devminds-textfind">{text}</span>
        </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Commentbutton;
