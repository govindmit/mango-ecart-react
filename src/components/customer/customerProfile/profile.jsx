import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../../../apis/users/auth";
import { useUser } from "../../../context/usercontext";
import Header from "../../../theme/frontend/header";


const Profile = () => {
  const navigate = useNavigate();
  const {user, setUser} = useUser();
  
  useEffect(()=>
  {
    getUser()
    .then((data) => {
      setUser(data.data.result.data);
    })
    .catch((e) => {
      console.log("error", e);
    });
  },[])  
  
  const handleEdit = () => {
    setUser(user);
    navigate("/profile");
  };

  return (
    <>
    <Header/>
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
                    <div className="panel-body">
                      <div className="billing-details shop-cart-table">
                        <table>
                          <tbody>
                            <tr>
                              <td>First Name</td>
                              <td>{user.firstName}</td>
                            </tr>
                            <tr>
                              <td>Last Name</td>
                              <td>{user.lastName}</td>
                            </tr>
                            <tr>
                              <td>Gender</td>
                              <td>{user.gender}</td>
                            </tr>
                            <tr>
                              <td>Contact</td>
                              <td>{user.mobileNumber}</td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td>{user.email}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div>
                        <button
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
