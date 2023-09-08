import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getUser } from "../../../apis/users/auth";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((data) => {
        // console.log(data.data.result.data);
        setUsers(data.data.result.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  const handleEdit = () => {

    navigate("/profile");
  };

  return (
    <>
      <div className="my-account-area">
        <div className="container">
          <div className="my-account">
            <div className="row">
              <div className="column">
                <div className="panel-group">
                  <div className="panel">
                    <div className="my-account-menu">
                      <a>MY Personal Informtion</a>
                    </div>
                    {/* {targetUser.map((value) => */}
                    <div className="panel-body">
                    <div className="billing-details shop-cart-table">
                      <table>
                        <tbody>
                          <tr>
                            <td>First Name</td>
                            <td>{users.firstName}</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td>{users.lastName}</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>{users.gender}</td>
                          </tr>
                          <tr>
                            <td>Contact</td>
                            <td>{users.mobileNumber}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>{users.email}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <button
                        // to="/profile"
                        type="submit"
                        className="button-one submit-button"
                        onClick={() => handleEdit()}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
