import React, { Children, useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  ListItem,
  ListItemText,
  List,
  IconButton,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../../../theme/frontend/header";
import NavBar from "../../../theme/frontend/header/navBar";
import Footer from "../../../theme/frontend/fotter";
import Banner from "../../../theme/frontend/banner";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { getProductDetails, addTocart } from "../../../apis/users/home";
import { toast } from "react-toastify";
import configs from "../../../config/config";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "flex-start",
    // padding: theme.spacing(2),
    backgroundColor: "#f6f6f6",
  },
  container: {
    backgroundColor: "#fff",
    marginTop: "80px",
    marginBottom: "80px",
    display: "flex",
  },
  media: {
    width: "350px",
    height: "280px",
    marginTop: "30px",
    cursor: "pointer",
  },
  media1: {
    width: "100px",
    height: "110px",
    marginBottom: "15px",
    border: "1px solid black",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "20px",
    cursor: "pointer",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  name: {
    color: "#0E1133",
    textTransform: "capitalize",
    marginBottom: theme.spacing(2),
  },
  price: {
    marginBottom: theme.spacing(2),
    color: "#c87065",
  },
  description: {
    color: "black",
    marginBottom: theme.spacing(2),
  },
  colorSize: {
    display: "flex",
    color: "#434343",
    marginBottom: theme.spacing(2),
  },
  color: {
    marginRight: theme.spacing(2),
    color: "#434343",
  },
  size: {
    marginRight: theme.spacing(2),
  },
  addToCartButton: {
    marginTop: "auto",
  },
}));

function cart() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <NavBar />
      <Banner data={"Cart"} />
      <Grid container className={classes.root}>
        <Container
          className={classes.container}
          sx={{ display: "flex", marginLeft: "80px", marginRight: "80px" }}
        >
          <Container>


            
          </Container>
        </Container>
      </Grid>
      <Footer />
    </>
  );
}

export default cart;
