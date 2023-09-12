import axios from "axios";
import configs from "../../config/config";
import { useEffect } from "react";
import { json } from "react-router-dom";
const targetId = localStorage.getItem("token");
console.log(targetId)

export async function userLogin(props) {
  try {
    let res = await axios({
      method: "post",
      url: `${configs.apiUrl}/user-auth/login`,
      data: props,
    });
    // console.log(res);
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

export async function logOutUser() {
  try {
    let res = await axios({
      method:'put',
      url:`${configs.apiUrl}/user-auth/logout`,
      headers:{
        "Content-Type": "application/json", // Modify as needed
        Authorization: `Bearer ${targetId}`, // Include the Bearer token
      },
    })
    return res;
  } 
  catch (error) {
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

export async function updateUser(userData) {
  try {
    let res = await axios({
      method: "put",
      url: `${configs.apiUrl}/user-auth/user`,
      headers: {
        "Content-Type": "application/json", // Modify as needed
        Authorization: `Bearer ${targetId}`, // Include the Bearer token
      },
      data: userData,
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

export async function addAddress(props) {
  try {
    let res = await axios({
      method: "post",
      url: "http://103.127.29.85:3006/api/user-address/create-address",
      headers: {
        "Content-Type": "application/json", // Modify as needed
        Authorization: `Bearer ${targetId}`, // Include the Bearer token
      },
      data: props,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function allAddress() {
  try {
    let res = await axios({
      method: "get",
      url: `${configs.apiUrl}/user-address/get-all-address`,
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

export async function getUserAddressById(id) {
  try {
    let res = await axios({
      method: "get",
      url: `${configs.apiUrl}/user-address/get-address/${id}`,
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

export async function updateAddress(id, userData) {
  try {
    let res = await axios({
      method: "put",
      url: `${configs.apiUrl}/user-address/update-address/${id}`,
      headers: {
        "Content-Type": "application/json", // Modify as needed
        Authorization: `Bearer ${targetId}`, // Include the Bearer token
      },
      data: userData,
    });
    return res;
  } catch (error) {
    return error.response;
  }
}

export async function deleteAddress(id) {
  try {
    let res = await axios({
      method: "delete",
      url: `${configs.apiUrl}/user-address/delete-address/${id}`,
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
