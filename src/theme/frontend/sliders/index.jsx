import React, { useState, useEffect, useRef } from 'react';
import { Paper, Typography } from '@mui/material';
import './style.css';
import { toast } from 'react-toastify';
import { bannerData } from '../../../apis/users/home';
import configs from '../../../config/config';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    bannerData()
      .then((res) => {
        let data = res.data;
        if (data.isError) {
          toast.error(data.message);
        } else {
          setImages(data.result.data);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(autoSlideIntervalRef.current);
    };
  }, [images]);

  const visibleProduct = images[currentIndex]; // Show only the current image

  return (
    <div className="imageSlider">
      <Paper className="sliderContainer">
        <img
          src={`${configs.baseUrl}${visibleProduct?.path}`}
          alt="name"
          className="image"
        />
        <Typography variant="caption" className="description">
          <h1>{visibleProduct?.title}</h1>
          <p>{visibleProduct?.content}</p>
        </Typography>
      </Paper>
    </div>
  );
};

export default ImageSlider;
