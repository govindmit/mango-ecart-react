import "./style.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
    const [showProfile , setShowProfile] = useState(false);
    const handleClickProfile =()=>
    {
        setShowProfile(!showProfile);
    }
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
                  <div className="dropdown" onClick={handleClickProfile}>
                    <a className="dropdown-toggle">Profile</a>
                    {
                     showProfile && ( <ul
                        className="dropdown-menu show"
                        
                        style={{
                          willChange: "transform",
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                        }}
                      >
                        <li>
                          <Link className="dropdown-item" to="/profile-table">My Account</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/my-address" >My Address</Link>
                        </li>
                        <li>
                          <a className="dropdown-item">My Orders</a>
                        </li>
                      </ul>
                    
                    )}
                
                    </div>
                    </li>
                   
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
