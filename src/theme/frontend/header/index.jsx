import "./style.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { Link } from "react-router-dom";
const Header = () => {
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
                  <div className="ng-star-inserted">
                    <Link  className="link" to="/register">Register /</Link>
                    <Link className="link" to="/userlogin">Login</Link>
                  </div>
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
