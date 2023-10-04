import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PersistentDrawerRight from "../../../theme/backend/sidebar/index";
import ReplyAllRoundedIcon from "@mui/icons-material/ReplyAllRounded";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Information from "../../../theme/backend/order/information";
import Shipments from "../../../theme/backend/order/shipments";
import Invoices from "../../../theme/backend/order/invoices";
import Transactions from "../../../theme/backend/order/transactions";
import { funOrderDeatils } from "../../../apis/admin/order/";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function orderDetail() {
  const history = useNavigate();
  const { id } = useParams();
  const [orderData, setorderData] = useState([]);
  const orderDetailFor = { ID: id, token: localStorage.getItem("token") };

  useEffect(() => {
    // Call the function and update the state with the result
    funOrderDeatils(orderDetailFor).then((response) => {
      setorderData(response?.data?.result?.data[0]);
    });
  }, []);

  // Define a function to handle the back button click
  const handleBackClick = () => {
    history(-1); // This will navigate back to the previous page/route
  };

  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const tabStyle = {
    color: "#000000",     //Change this to your desired text font color
    fontSize: ".650rem", // Change this to your desired text font size
    fontWeight: "1000", // Change this to your desired text font Weight
  };
  
  return (
    <>
      <PersistentDrawerRight />
      <div>
        <ReplyAllRoundedIcon onClick={handleBackClick} />
        <h2>Orders Details</h2>
      </div>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#fb9400",
              },
            }}
            aria-label="full width tabs example"
          >
            <Tab label="Information" {...a11yProps(0)} style={tabStyle} />
            <Tab label="Shipments" {...a11yProps(1)} style={tabStyle} />
            <Tab label="Invoices" {...a11yProps(2)} style={tabStyle} />
            <Tab label="Transactions" {...a11yProps(3)} style={tabStyle} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Information />
            {orderData && orderData.length > 0 && (
              <Information data={orderData} />
            )}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Shipments />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Invoices />
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Transactions />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>    
  );
}

export default orderDetail;
