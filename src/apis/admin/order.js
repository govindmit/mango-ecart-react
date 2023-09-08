import axios from "axios";
import configs from "../../config/config"

export async function funlastorder(props){
    try {
        let res = await axios({
          method: 'GET',
          url: `${configs.apiUrl}/admin-order/get-all-order?page=1&pageSize=100&filter=true&date=2023-03-06,2023-03-07`,
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