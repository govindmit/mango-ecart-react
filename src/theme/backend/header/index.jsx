import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';


function index() {
  const [anchorEl, setAnchorEl] = useState(null);

  let fullname = localStorage.getItem('fullname');

  // Function to handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const buttonTextStyles = {
    color: '#FFFFFF', // Change this to your desired text color
  };

  return (
    <div>
      <Button
        style={buttonTextStyles}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
       <Face6RoundedIcon/> {fullname}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}

export default index