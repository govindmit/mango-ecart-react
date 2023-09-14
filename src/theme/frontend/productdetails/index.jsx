import React, { Children } from "react";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../header";
import NavBar from "../header/navBar";
import Footer from "../fotter";
import Banner from "../banner";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    backgroundColor: "#f6f6f6",
  },
  container: {
    backgroundColor: "#fff",
    marginTop: "80px",
    marginBottom: "80px",
    display: "flex",
  },
  //   card: {
  //     display: "flex",
  //     maxWidth: 800,
  //   },
  media: {
    width: 380,
    height: 290,
    marginBottom: 100,
    marginTop: 30,
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
          {/* <Card className={classes.card}> */}
          <Container>
            <CardMedia
              className={classes.media}
              image="http://103.127.29.85:3006/uploads/imagejeans.jpeg"
              title="Product Image"
            />
          </Container>
          <div className={classes.details}>
            <CardContent>
              <Typography
                variant="h4"
                className={classes.name}
                sx={{
                  fontSize: 16,
                  //   marginBottom: 5,
                  marginLeft: "-30px",
                  fontWeight: 500,
                  fontFamily: "Josefin Sans', sans-serif",
                }}
              >
                Jeans
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
                $450.00
              </Typography>
              <Typography
                variant="body1"
                className={classes.description}
                sx={{
                  marginTop: "10px",
                  marginLeft: "-30px",
                  fontSize: "16px",
                  // fontWeight:"bold",
                }}
              >
                <p>
                  Jeans are a type of pants traditionally made from denim (a
                  kind of cotton fabric). The word most commonly refers to denim
                  blue jeans. Jeans can be other colors, but they're most
                  commonly blue. The defining feature of most jeans is that
                  they're made out of some kind of denim or denim-like fabric.
                </p>
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
                      Black
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
                    <Typography variant="body1" sx={{
                          marginLeft: "35px",
                    }}>M</Typography>
                  </ListItem>
                </List>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.addToCartButton}
              >
                Add to Cart
              </Button>
            </CardContent>
          </div>

          {/* </Card> */}
        </Container>
      </Grid>
      <Footer />
    </>
  );
}
export default ProductDetails;
