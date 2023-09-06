

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, IconButton } from '@mui/material';
import './style.css'; // Import your CSS file
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const productData = [
    {
        img: 'http://103.127.29.85:3006/uploads/imagejeans.jpeg',
        name: 'Jeans',
        price: '$450.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagetshirt.jpg',
        name: 'Tshirt',
        price: '$75.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagepexels-willo-m-3768005.jpg',
        name: 'Printed Shirt',
        price: '$50.00',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imageYellow%203-600x800.jpg',
        name: 'Shirt',
        price: '$200.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imageshirt.jpeg',
        name: 'Shirt',
        price: '$200.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagepexels-pixabay-270408.jpg',
        name: 'Testing Software',
        price: '$22.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagepexels-luis-gomes-546819.jpg',
        name: 'Software Test Product',
        price: '$50.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagepexels-marko-blazevic-2875617%20(1).jpg',
        name: 'Puzzle Game',
        price: '$5.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imageshoes.jpeg',
        name: 'Shoes',
        price: '$20.00',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imagepexels-cottonbro-studio-4709285.jpg',
        name: 'LED Monitor 32',
        price: ' $26,900.00 ',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imageshoe_cabinet.jpeg',
        name: 'Shoe Cabinet',
        price: '$2,200.00',
    },
    {
        img: 'http://103.127.29.85:3006/uploads/imageran2.jpeg',
        name: 'Feature Products',
        price: '$520.00 ',
    },
];

const ProductsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next card
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
    };

    // Auto-slide the cards every 3 seconds (adjust the interval as needed)
    useEffect(() => {
        const autoSlideInterval = setInterval(goToNext, 3000);

        return () => {
            clearInterval(autoSlideInterval);
        };
    }, []);

    const visibleProducts = [
        productData[currentIndex],
        productData[(currentIndex + 1) % productData.length],
        productData[(currentIndex + 2) % productData.length],
        productData[(currentIndex + 3) % productData.length],
    ];

    return (
        <div className='card-container'>
            <div className='card-slider'>
                <button
                    className='icon-button'
                    onClick={goToNext}
                >
                    <ArrowBackIosIcon />
                </button>
                {visibleProducts.map((product, index) => (
                    <Card key={index} className='card'>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='140'
                                image={product.img}
                                alt={product.name}
                            />
                            <button className='media-button'>New</button>
                            <CardContent>
                                <Typography gutterBottom variant='h5' component='div'>
                                    {product.name}
                                </Typography>
                                <Typography variant='body2' color='text.secondary'>
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                <button
                    className='icon-button'
                    onClick={goToNext}
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductsCard;
