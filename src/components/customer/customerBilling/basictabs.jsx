import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./style.css"
import { Button } from '@mui/material';
import BillingAddress from './billingaddress';
import ProfileHeader from '../../../theme/frontend/profileheader';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="content">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [isComponentVisible, setComponentVisible] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick =()=>
  {
    setComponentVisible(true);
  }
  return (
    <>
    <ProfileHeader/>
    <Box className="contain" sx={{ width: '90%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginRight:'100px'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="Billing Address"  {...a11yProps(0)} />
          <Tab label="Shopping Address" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <p className='content'>Billing Address</p>
        {/* {<BillingAddress/>} */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       <p className='content'> Shipping Address</p>
      </CustomTabPanel>
      <button className='address-btn' onClick={handleClick}> New Address</button>
           {isComponentVisible ? (<BillingAddress/>):""}
    </Box>
    </>
  );
}