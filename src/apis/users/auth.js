import axios from "axios";
import configs from "../../config/config";
const targetId = localStorage.getItem("token");

export async function userLogin(props) {
  try {
    let res = await axios({
      method: "post",
      url: `${configs.apiUrl}/user-auth/login`,
      data: props,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function forgetPasswordUser(props) {
  try {
    let res = await axios({
      method: "post",
      url: `${configs.apiUrl}/user-auth/forgot-password`,
      data: props,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function getUser() {
  try {
    let res = await axios({
      method: "get",
      url: `${configs.apiUrl}/user-auth/user`,
      headers: {
        "Content-Type": "application/json", // Modify as needed
        Authorization: `Bearer ${targetId}`, // Include the Bearer token
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function updateUser() {
  try {
    let res = await axios(
      {
        method: 'put',
        url: `${configs.apiUrl}/user-auth/user`,
        headers: {
          "Content-Type": "application/json", // Modify as needed
          Authorization: `Bearer ${targetId}`, // Include the Bearer token
        }
      });
    return res;
  }
  catch (error) {
    return error.response
  }
}

export async function addAddress(props) {
  try {
    let res = await axios({
      method: "post",
      url: `${configs.apiUrl}/user-address/create-address`,
      data: props,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function registerUser(props) {
  try {
    let res = await axios({
      method: "post",
      url: `${configs.apiUrl}/user-auth/register`,
      data: props,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function userVerification(props) {
  try {
    let res = await axios({
      method: "get",
      url: `${configs.apiUrl}/user-auth/verify/${props}`,

    });
    return res;
  } catch (error) {
    return error.response;
  }
}