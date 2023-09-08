import React from "react";
import Header from "../../../theme/frontend/header";
import BasicTabs from "../../customer/customerBilling/basictabs";

import NavBar from "../../../theme/frontend/header/navBar";
import ImageSlider from "../../../theme/frontend/sliders";
import Footer from "../../../theme/frontend/fotter";
import ProductsCard from "../../../theme/frontend/products-card";
import "./style.css";

function index() {
  return (
    <>
      <div>
        <div>
          <Header />
          <NavBar />
        </div>

        <div>
          <ImageSlider />
        </div>
        <div className="all-products-div">
          <h1>Featured Products</h1>
          <ProductsCard />
          <h1>Latest Products</h1>
          <ProductsCard />
          <h1>Trending Products</h1>
          <ProductsCard />
        </div>
        <div>
          <Footer />
        </div>
        {/* <BasicTabs/> */}
      </div>
      
    </>
  );
}

export default index;
