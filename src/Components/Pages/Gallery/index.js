import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  useMediaQuery,
  ImageList,
  ImageListItem,
} from "@mui/material";
import Header from "../Header";
import { motion } from "framer-motion";
import Gallerydata from "../../../ServerData/gallerydata";
import AOS from "aos";
import "./gallery.css";

const Gallery = () => {
  const isMobile = useMediaQuery("(max-width: 600px)"); // Responsive breakpoint

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="devminds-gallerybg">
      <Header />
      <div className="devminds-gallerydiv container">
        <Grid container spacing={isMobile ? 1 : 2} justifyContent="center">
          <ImageList
            sx={{overflow: 'hidden' }}
            variant="masonry"
            cols={isMobile ? 1 : 3}
            gap={isMobile ? 8 : 16}
          >
            {Gallerydata.map((item, index) => (
              <ImageListItem key={index} data-aos="fade-up">
                <Card className="devminds-listimage">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <CardMedia
                      className="devminds-listimage"
                      component="img"
                      image={item.src}
                      alt={`Image ${index}`}
                    />
                  </motion.div>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;
