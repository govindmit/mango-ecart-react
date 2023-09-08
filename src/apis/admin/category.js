import axios from "axios";
import configs from "../../config/config"

export async function funcategories(props){
    try {
        let res = await axios({
          method: 'GET',
          url: `${configs.apiUrl}/admin-category/get-categories`,
          headers: {
            'Content-Type': 'application/json', // Modify as needed
            'Authorization': `Bearer ${props}` // Include the Bearer token
          }
        });
        return res;
      
    } catch (error) {
        return error.response;
      }

}