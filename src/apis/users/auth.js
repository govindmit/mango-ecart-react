import axios from "axios";
import configs from "../../config/config";

export async function userLogin(props) {
  // console.log(props);
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

export async function forgetPasswordUser(props)
{
  try
  {
    let res = await axios ({
      method:"post",
      url: `${configs.apiUrl}/user-auth/forgot-password`,
      data: props
    })
    return res;
  }
    catch (error)
    {
      return error.response
    }
  }
