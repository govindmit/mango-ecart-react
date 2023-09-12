import axios from "axios";
import configs from "../../config/config"

export async function bannerData() {

  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/admin-banner/get-banners`,

    });
    return res;
  } catch (error) {
    return error.response;
  }

}


export async function customerContact() {
  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/admin-contactus-config/get-contact-config`,

    });
    return res;

  } catch (error) {
    return error.response;
  }

}

export async function featureProduct() {

  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/user-product/feature-product`,
    });

    return res;

  } catch (error) {
    return error.response;
  }

}



export async function latestProduct(props) {
  let options = 'newArrival';
  if (props) {
    options = "mostView";
  }
  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/user-product/latest-product?option=${options}`,

    });

    return res;


  } catch (error) {
    return error.response;
  }

}

export async function getHomeData() {

  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/admin-home-manage/get-home-settings`,
    });

    return res;

  } catch (error) {
    return error.response;
  }

}


export async function allProduct() {

  try {
    let res = await axios({
      method: 'get',
      url: `${configs.apiUrl}/user-product/get-all-products?page=1&pageSize=10&filter=true&catId=`,
    });

    return res;

  } catch (error) {
    return error.response;
  }

}
