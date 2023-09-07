
import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, IconButton } from '@mui/material';
import '../style.css'; // Import your CSS file
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { toast } from 'react-toastify';
import configs from '../../../../config/config';
import { latestProduct } from '../../../../apis/users/home';

const LatestsProductsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productData, setProductData] = useState([]);
    const autoSlideIntervalRef = useRef(null);

    // Function to go to the next card
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
    };

    // Function to go to the previous card
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productData.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        latestProduct("newArrival")
            .then((res) => {
            
                let data = res.data;
                if (data.isError) {
                    toast.error(data.message);
                } else {
                    setProductData(data.result.productData);
                }
            })
            .catch((e) => {
                console.log("error", e);
            });
    }, []);

    // Start the auto-slide interval when productData is available
    useEffect(() => {
        if (productData.length > 0) {
            autoSlideIntervalRef.current = setInterval(goToNext, 3000);
        }

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(autoSlideIntervalRef.current);
        };
    }, [productData]);

    const visibleProducts = [
        productData[currentIndex],
        productData[(currentIndex + 1) % productData.length],
        productData[(currentIndex + 2) % productData.length],
        productData[(currentIndex + 3) % productData.length],
    ];

    return (
        <div className='card-container'>
            <div className='card-slider'>
                <button className='icon-button' onClick={goToPrevious}>
                    <ArrowBackIosIcon />
                </button>
                {visibleProducts.map((product, index) => (
                    <Card key={index} className='card'>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='140'
                                image={`${configs.baseUrl}${product?.ProductImages[0].path}`}
                            />
                            <button className='media-button'>New</button>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {product?.ProductFlat.name}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    ${product?.ProductFlat.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                <button className='icon-button' onClick={goToNext}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default LatestsProductsCard;
