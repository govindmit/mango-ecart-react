
import React, { useState, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import './style.css';
import { toast } from 'react-toastify';
import { bannerData } from '../../../apis/users/home';
import configs from '../../../config/config';


const ImageSlider = () => {

  const [images, setImages] = useState([
    {
      path: 'http://103.127.29.85:3006/uploads/imagepexels-pixabay-509922.jpg',
      title: 'New simple furniture available',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue urna, egestas vitae vestibulum eu, euismod nec tellus. Pellentesque erat odio, vulputate ut commodo ut, rhoncus eu risus. Donec efficitur a nunc nec porttitor. Vestibulum faucibus ipsum placerat purus consectetur porttitor',
    },
    {
      path: 'http://103.127.29.85:3006/uploads/imagepexels-angela-roma-7319299.jpg',
      title: 'Fashion Collection',
      body: "A collection is a collection or set of pieces of clothing and/or accessories that have some relationship with each other. This relationship is usually centered on the chosen theme, which in turn is related to the consumer's style and the image of a particular brand.",


    },
    {
      path: 'http://103.127.29.85:3006/uploads/imagepexels-eric-mufasa-1350789.jpg',

      title: ' Colorful Chair',
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac enim vehicula, fringilla metus posuere, consequat mauris. Morbi pulvinar hendrerit ultricies. Quisque quis suscipit dui. Ut sit amet mauris sit amet mi tincidunt tincidunt.",
    },
    {
      path: 'http://103.127.29.85:3006/uploads/imagepexels-saviesa-home-2089698.jpg',
      title: 'Kitchen Appliances',
      body: "Buy latest branded kitchen appliances online at lowest prices in India on Flipkart.com. Read kitchen appliance's reviews, features. Great offers & discounts ..."
    },
    {
      path: 'http://103.127.29.85:3006/uploads/imagepexels-cottonbro-studio-3661389.jpg',
      title: 'Kids lovable toys',
      body: "Things they can reach for, hold, shake, and make noise with—rattles, large rings, squeeze toys, teething toys, soft dolls, textured balls, and vinyl and board books. Things to listen to—books with nursery rhymes and poems, and recordings of lullabies and simple songs."
    }

  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    bannerData()
      .then((res) => {
        let data = res.data;
        if (data.isError) {
          toast.error(data.message);
          // setLoading(false)
        } else {
          // toast.success(data.result);
          // setEmail('');
          // setLoading(false)
          // console.log("success")
          // console.log("resultData=>", data.result.data)
          setImages(data.result.data)
        }

      })
      .catch((e) => {
        console.log("eror", e);
      });

  });



  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="imageSlider">
      <Paper elevation={3} className="sliderContainer">
        <img
          src={`${configs.baseUrl}${images[currentIndex].path}`}
          alt="name"
          className="image"
        />
        <Typography variant="caption" className="description">
          <h1>{images[currentIndex].title}</h1>
          <p>{images[currentIndex].content}</p>
        </Typography>
      </Paper>
    </div>
  );
};

export default ImageSlider;

