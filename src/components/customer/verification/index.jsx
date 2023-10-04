import Footer from "../../../theme/frontend/fotter"
import Header from "../../../theme/frontend/header"
import NavBar from "../../../theme/frontend/header/navBar"
import { userVerification } from '../../../apis/users/auth';

import './style.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Verification = () => {
    const navigate =useNavigate();
    const url = window.location.href;
    const getQueryParameters = (url) => {
        const queryString = url.split('?')[1];
        const params = {};

        if (queryString) {
            queryString.split('&').forEach((param) => {
                const [key, value] = param.split('=');
                params[key] = decodeURIComponent(value);
            });
        }

        return params;
    };

    const queryParams = getQueryParameters(url);
    const token = queryParams.token;
   
const handleVerifyUser = ()=>{

    if (token) {
     
        {
            userVerification(token)
            .then((res) => {
              let data = res.data;
              if (data.isError)
              {
                toast.error(data.message);
              }
              else{
                toast.success(data.result);   
                navigate('/');
              }
            })
            .catch((e) => {
              console.log("error", e);
              toast.error("there is some technical error try after some time");
            });
        }
      }
}


    return (
        <div>
            <div>
                <Header />
                <NavBar />
            </div>
            <div className="verification-div-container">
                <div className="verification-content-div">
                    <h4>Verify Email</h4>
                    <p>Click here to verify email</p>
                    <button
                        className="verifyBtn"
                        onClick={()=>handleVerifyUser()}
                    >
                        Verify
                    </button>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>

    )
}
export default Verification
