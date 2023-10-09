import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getquantity } from "../../../apis/users/home";

const NavBar = () => {
  const [quantity, setQuantity] = useState(0);
  var user_id = localStorage.getItem("user");
  const user_token = localStorage.getItem("token");

  
  useEffect(() => {
    if (user_id  && user_token) {
      getquantity()
        .then((data) => {
          if (data?.data?.isError) {
            setQuantity(0);
          } else {
                setQuantity(data?.data?.result?.data?.itemsQty);
          }
        })
        .catch((e) => {
          toast.error("Something went wrong, Api not working");
        });
    } else {
      setQuantity(0);
    }
  }, []);

  return (
    <div className="navContainer">
      <div>
        <img src="http://ecart.mangoitsol.com/assets/home_page/img/home/ecart-logo.png" />
      </div>
      <div className="navContainer-2">
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/product"}>
          <h4>Products</h4>
        </Link>
        <h4>Apparels</h4>
        <h4>Furniture</h4>
        <h4>Appliances</h4>
        <h4>Mobile Accessories</h4>
        <h4>Virtual Products</h4>
        <Link to="/about-us">
          {" "}
          <h4>About US</h4>{" "}
        </Link>
        <Link to="/contact">
          {" "}
          <h4>Contact</h4>{" "}
        </Link>
        <span>{quantity}</span>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};
export default NavBar;
