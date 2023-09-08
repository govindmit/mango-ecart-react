import axios from "axios";
import configs from "../../config/config"


export async function dashboard(props){
    try {
        let res = await axios({
          method: 'GET',
          url: `${configs.apiUrl}/dashboard/get-stats?date=2023-03-16,2023-03-16`,
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