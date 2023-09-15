
import React, { useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, FormControl, IconButton, MenuItem, Select } from '@mui/material';
import './style.css'; // Import your CSS file
import configs from '../../../config/config';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const ProductDataCard = (props) => {
  const productData = props.productData;
  const currentPage = props.page;
  const setCurrentPage = props.setPage;
  const cardsPerPage = props.pageSize;
  const setCardsPerPage = props.setpageSize;

  const totalPages = Math.ceil(productData.length / cardsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return productData?.slice(startIndex, endIndex);
  };

  const handleChange = (e) => {
    setCardsPerPage(e.target.value);
    setCurrentPage(1)
  }
  const pageData = getPageData();

  return (
    <div className='product-card-container'>
      <div className='product-card-slider'>
        {
          productData.map((product, index) => (
            <Card key={index} className='product-card'>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={`${configs.baseUrl}${product?.ProductImages?.[0]?.path}`}
                />
                <button className='product-media-button'>New</button>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {product?.ProductFlat?.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    ${product?.ProductFlat?.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }

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
          {currentPage} - {Math.min(currentPage * cardsPerPage, productData.length)} of {productData.length}
        </div>
        <div>
          <IconButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDataCard;

