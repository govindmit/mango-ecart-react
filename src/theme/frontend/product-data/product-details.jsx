
import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, FormControl, IconButton, MenuItem, Select } from '@mui/material';
import './style.css'; // Import your CSS file
import configs from '../../../config/config';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const ProductDetailsCard = (props) => {
    const productData = props.productData;
    const currentPage = props.page;
    const setCurrentPage = props.setPage;
    const cardsPerPage = props.pageSize;
    const setCardsPerPage = props.setpageSize;
    const totalPages = Math.ceil(productData?.length / cardsPerPage);
    console.log(productData, "sds");
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      
    };


    const getPageData = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + productcardsPerPage;
        return productData.slice(startIndex, endIndex);
    };


    const handleChange = (e) => {
        setCardsPerPage(e.target.value);
        setCurrentPage(1)
    }

    return (
        <div className='card-details-container'>
            <div className='card-details-slider'>
                {productData.map((product, index) => (
                    <Card key={index} className='card-details'>
                        <CardActionArea>
                            <div className='myDetailsCardDiv'>
                                <div className='card-media-div'>
                                    <CardMedia

                                        component='img'
                                        image={`${configs.baseUrl}${product?.ProductImages?.[0]?.path}`}
                                        height='250'
                                    />
                                    <button className='product-media-button'>New</button>
                                </div>
                                <div className='card-details-container'>

                                    <Typography gutterBottom variant='h5' component='div'>
                                        {product?.ProductFlat?.name}
                                    </Typography>
                                    <h5>
                                        ${product?.ProductFlat?.price}
                                    </h5>
                                    <Typography variant='body2' color='text.secondary'>
                                        ${product?.ProductFlat?.description}
                                    </Typography>

                                </div>
                            </div>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className='pagination'>
                <p>Items per Page:</p>
                <div>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={cardsPerPage}
                            onChange={handleChange}
                        >
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="25">25</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                            <MenuItem value="100">100</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div>
                    {cardsPerPage > productData.length
                        ? `${((currentPage - 1) * cardsPerPage) + 1} - ${(((currentPage - 1) * cardsPerPage) + 1) + productData.length} of ${productData.length}`
                        : `${((currentPage - 1) * cardsPerPage) + 1} - ${Math.min(currentPage * cardsPerPage, productData.length * currentPage)} of ${productData.length}`
                    }
                </div>
                <div>
                    <IconButton
                        onClick={() => paginate(currentPage - 1)}                 
                        disabled={currentPage === 1}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>

                    <IconButton
                        onClick={() => paginate(currentPage + 1)}
                        disabled={productData.length < cardsPerPage}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
export default ProductDetailsCard;


