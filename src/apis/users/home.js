import axios from "axios";
import configs from "../../config/config"

export async function bannerData(){
    
    try {
        let res = await axios({
          method: 'get',
          url: `${configs.apiUrl}/admin-banner/get-banners`,
        
        });
        // console.log("res=>",res);
        return res;
       
      
    } catch (error) {
        return error.response;
      }

}


export async function featureProduct(){
    
  try {
      let res = await axios({
        method: 'get',
        url: `${configs.apiUrl}/user-product/feature-product`,
      
      });
      // console.log("res=>",res);
      return res;
     
    
  } catch (error) {
      return error.response;
    }

}



export async function latestProduct(props){
  let options ='newArrival' ;
    if(props){
      options ="mostView";
    }
  try {
      let res = await axios({
        method: 'get',
        url: `${configs.apiUrl}/user-product/latest-product?option=${options}`,
      
      });
      // console.log("res=>",res);
      return res;
     
    
  } catch (error) {
      return error.response;
    }

}