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
import Header from "../header";
import NavBar from "../header/navBar";
import Footer from "../fotter";
import Banner from "../banner";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { getProductDetails } from "../../../apis/users/home";
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

function ProductDetails() {
  const classes = useStyles();
  const location = useLocation();
  const { Id } = location.state;
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    } else {
      window.alert("You can't add more than 5 items to the cart.");
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    getProductDetails(Id)
      .then((data) => {
        console.log(data.data.result.productData.ProductImages);
        setProduct(data.data.result.productData.ProductFlat);
        setImage(data.data.result.productData.ProductImages);
        setSelectedImage(data.data.result.productData.ProductImages[0]);
      })
      .catch((e) => {
        toast.error("Something went wrong, Api not working");
      });
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Banner data={"Product Details"} />
      <Grid container className={classes.root}>
        <Container
          className={classes.container}
          sx={{ display: "flex", marginLeft: "80px", marginRight: "80px" }}
        >
          <Container>
            <CardMedia
              className={classes.media}
              image={`${configs.baseUrl}${selectedImage?.path}`}
              title="Product Image"
            />
            <Grid style={{ display: "flex" }}>
              {image.map((ImageData, index) => (
                <CardMedia
                  className={classes.media1}
                  image={`${configs.baseUrl}${ImageData?.path}`}
                  onClick={() => handleImageClick(ImageData, index)}
                  title="Product Image"
                  style={{
                    border:
                      selectedImageIndex === index ? "2px solid red" : "none",
                  }}
                />
              ))}
            </Grid>
          </Container>
          <div
            className={classes.details}
            style={{
              float: "left",
              width: "100%",
              marginRight: "200px",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                className={classes.name}
                sx={{
                  fontSize: 16,
                  marginLeft: "-30px",
                  fontWeight: 500,
                  fontFamily: "Josefin Sans', sans-serif",
                }}
              >
                {product?.name}
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.price}
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  lineHeight: "28px",
                  marginLeft: "-30px",
                  marginTop: "10px",
                }}
              >
                {`$ ${product?.price}`}
              </Typography>
              <Typography
                variant="body1"
                className={classes.description}
                sx={{
                  marginTop: "10px",
                  marginLeft: "-30px",
                  fontSize: "16px",
                  width: "180%",
                }}
              >
                {product?.description}
              </Typography>
              <div className={classes.colorSize}>
                <List>
                  <ListItem className={classes.listItem}>
                    <Typography
                      className={classes.color}
                      sx={{
                        marginLeft: "-50px",
                        fontWeight: "800",
                        fontSize: "14px",
                      }}
                    >
                      Color
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        marginLeft: "25px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: `${product?.color}`,
                          height: "15px",
                          width: "15px",
                        }}
                      ></div>
                    </Typography>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <Typography
                      sx={{
                        marginLeft: "-50px",
                        fontWeight: "800",
                        fontSize: "14px",
                      }}
                    >
                      Size
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        marginLeft: "35px",
                      }}
                    >
                      {product?.size}
                    </Typography>
                  </ListItem>
                </List>
              </div>

              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconButton
                    color="black"
                    style={{
                      color: "black",
                      borderRadius: "1px",
                      marginLeft: "-35px",
                      backgroundColor: "#F6F6F6",
                    }}
                    onClick={handleDecrement}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  sx={{
                    marginLeft: "-13px",
                  }}
                >
                  <TextField
                    style={{
                      color: "black",
                      backgroundColor: "#F6F6F6",
                      width: "30%",
                      border: "1px solid black",
                      fontSize: "25px",
                    }}
                    type="number"
                    variant="outlined"
                    size="small"
                    value={quantity}
                    onChange={handleQuantityChange}
                    inputProps={{
                      min: 1,
                    }}
                  />
                </Grid>
                <Grid item>
                  <IconButton
                    color="black"
                    style={{
                      color: "black",
                      borderRadius: "1px",
                      marginLeft: "-145px",
                      backgroundColor: "#F6F6F6",
                    }}
                    onClick={handleIncrement}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>

                <Grid item>
                  <IconButton
                    color="black"
                    style={{
                      backgroundColor: "#F6F6F6",
                      borderRadius: "1px",
                      marginLeft: "-90px",
                      color: "black",
                    }}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Container>

        <div style={{ display: "flex" }}>
          <Container
            style={{
              // backgroundColor: "#fff",
            }}
          >
            <a style={{backgroundColor:"#ffba5a", fontSize:"20px",fontWeight:"600"}}> Description </a>
          </Container>
          <Container
            style={
              {
                backgroundColor: "#fff",
                // display: "inline-block",
                // width: "50%",
                // boxSizing: "border-box",
                // padding: "10px",
              }
            }
          >
            <CardContent>
              <Typography
                variant="h4"
                className={classes.name}
                sx={{
                  fontSize: 16,
                  marginLeft: "-30px",
                  fontWeight: 500,
                  fontFamily: "Josefin Sans', sans-serif",
                }}
              >
                {product?.name}
              </Typography>
              <Typography variant="p">{product?.description}</Typography>
            </CardContent>
          </Container>
        </div>
      </Grid>

      <Footer />
    </>
  );
}
export default ProductDetails;
