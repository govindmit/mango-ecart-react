import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { Divider, TextField } from '@mui/material';
import './style.css';

const PriceSlider = ({ onPriceChange }) => {
    const [price, setPrice] = useState([0, 1000]);
    const [formattedPrice, setFormattedPrice] = useState('');

    const handleChange = (event, newValue) => {
        setPrice(newValue);
    };

    useEffect(() => {
        const formatted = price.join(',');
        setFormattedPrice(formatted);
        onPriceChange(formatted);
    }, [price, onPriceChange]);

    return (
        <div className="range-slider-div">
            <h3>PRICE</h3>
            <Divider />
            <Typography>
                <h4>Your Range:</h4>
            </Typography>

            <div className='price-content-container'>
                <div className='range-div'>
                    <h5>$</h5> <TextField value={price[0]} /> <h5>$</h5><TextField value={price[1]} />
                </div>

                <Slider
                    className='price-slider'
                    value={price}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    min={0}
                    max={1000}
                    step={10}
                />
            </div>
        </div>
    );
};

export default PriceSlider;
