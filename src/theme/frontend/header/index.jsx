import "./style.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../../apis/users/auth";
import { toast } from "react-toastify";

const Header = () => {
  const customerLoginDetails = localStorage.getItem("token");
  console.log(customerLoginDetails);
  
  const [showProfile, setShowProfile] = useState(false);
  const [islogin, setIslogin] = useState(true);
  const navigate = useNavigate();

  const handleClickProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleClickLogOut = () => {
    // localStorage.removeItem("token");
    // setIslogin(false);
    // toast.success("User Log-out Successfully");
    // navigate("/")
    logOutUser(customerLoginDetails)
    .then((res)=>
    {
      let data = res.data
      // console.log(data,"jhky")
      if(data.isError)
      {
        toast.error(data.message);
      }
      else
      {
        localStorage.removeItem('token');
        setIslogin(false)
        navigate("/");
        toast.success(data.result);
      }
    })
    .catch((e)=>
    {
      toast.error("Something went wrong, Api is not working")
    })
  };
  return (
    <>
      <div className="top-header">
        <div className="container top-contai">
          <div className="th-main">
            <div className="th-left">
              <ul>
                <li>
                  <a className="link">{<MailOutlineIcon />}</a>
                </li>
                <li>
                  <a className="link">{<PhoneInTalkIcon />}</a>
                </li>
              </ul>
            </div>
            <div className="th-right">
              <ul>
                <li>
                  {customerLoginDetails && islogin ? (
                    <ul>
                      <li>
                        <div className="dropdown" onClick={handleClickProfile}>
                          <a className="dropdown-toggle">Profile</a>
                          {showProfile && (
                            <ul
                              className="dropdown-menu show"
                              style={{
                                willChange: "transform",
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                              }}
                            >
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/profile-table"
                                >
                                  My Account
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/my-address"
                                >
                                  My Address
                                </Link>
                              </li>
                              <li>
                                <a className="dropdown-item">My Orders</a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>

                      <li>
                        <a onClick={handleClickLogOut}>Logout</a>
                      </li>
                    </ul>
                  ) : (
                    <div className="ng-star-inserted">
                      <Link className="link" to="/register">
                        Register /
                      </Link>
                      <Link className="link" to="/userlogin">
                        Login
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
