import axios from "axios";
import configs from "../../config/config"

export async function registerUser(props){
    
    try {
        let res = await axios({
          method: 'post',
          url: `${configs.apiUrl}/user-auth/register`,
          data: props
        });
        return res;
       
      
    } catch (error) {
        return error.response;
      }

}