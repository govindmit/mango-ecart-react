import React, { useEffect, useState } from 'react'
import NavBar from '../../../theme/frontend/header/navBar'
import ImageSlider from '../../../theme/frontend/sliders'
import Footer from '../../../theme/frontend/fotter'
import ProductsCard from '../../../theme/frontend/products-card'
import './style.css'


function index() {
  const [featureData, setFeatureData] = useState([]);
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <ImageSlider />
        </div>
        <div className='all-products-div'>
          <h1>Featured Products</h1>
          <ProductsCard productData="featureData"/>
          <h1>Latest Products</h1>
          <ProductsCard productData="latestData" />
          <h1>Trending Products</h1>
          <ProductsCard productData="trendingData" />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default index