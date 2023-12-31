import axios from "axios";
import configs from "../../config/config"


export async function funLogin(props){
    try {
        let res = await axios({
          method: 'post',
          url: `${configs.apiUrl}/admin-auth/login`,
          data: props
        });
        return res;
      
    } catch (error) {
        return error.response;
      }

}
export async function funForgotPassword(props){
    try {
        let res = await axios({
          method: 'post',
          url: `${configs.apiUrl}/admin-auth/forgot-password`,
          data: props
        });
        return res;
      
    } catch (error) {
        return error.response;
      }
}

export async function funResetPassword(props){
  try {
      let res = await axios({
        method: 'post',
        url: `${configs.apiUrl}/admin-auth/reset-password`,
        data: props
      });
      return res;
    
  } catch (error) {
      return error.response;
    }
}