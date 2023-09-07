import React, { useEffect, useState } from 'react'
import NavBar from '../../../theme/frontend/header/navBar'
import ImageSlider from '../../../theme/frontend/sliders'
import Footer from '../../../theme/frontend/fotter'
import './style.css'
import FeatureProductsCard from '../../../theme/frontend/products-card/feature-product'
import LatestsProductsCard from '../../../theme/frontend/products-card/latest-product'
import TrendingProductsCard from '../../../theme/frontend/products-card/trending-product'
import { getHomeData } from '../../../apis/users/home'


function index() {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    getHomeData()
      .then((res) => {
        let data = res.data;
        if (data.isError) {
          toast.error(data.message);
        } else {
    
          setHomeData(data.result.data);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  return (
    <>
      <div>
    
        <div>
          <NavBar />
        </div>
         <div> 
           { homeData.length >0 &&
           (homeData[0].isBanner ==1 )?(
          <ImageSlider />
          ): " "}
        </div> 
        <div className='all-products-div'>
          <h1>Featured Products</h1>
          { homeData.length >0 &&
          (homeData[0].isFeatureProducts==1)?(
            <FeatureProductsCard />
          ): " "}
         
          <h1>Latest Products</h1>
          { homeData.length >0 &&
          (homeData[0].isLatestProducts==1)?(
            <LatestsProductsCard />
          ): " "}
          <h1>Trending Products</h1>
          { homeData.length >0 &&
          (homeData[0].isMostView==1)?(
            <TrendingProductsCard />
          ): " "}
         
        </div>
        <div>
        { homeData.length >0 &&
          (homeData[0].isFooter==1)?(
            <Footer />
          ): " "}
        
        </div>
        
      </div>
    </>
  )
}

export default index