import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../../theme/frontend/header";
import "./style.css";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../../apis/users/auth";
import { useUser } from "../../../context/usercontext";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [editedUser, setEditedUser] = useState(user);
  const [data, setData] =useState([]);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  useEffect(() => {
    setData({
      firstName: editedUser.firstName,
      lastName: editedUser.lastName,
      email: editedUser.email,
      mobileNumber: editedUser.mobileNumber,
      gender: editedUser.gender,
    });
  }, [editedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(data)
      .then((data) => {
        navigate("/profile-table");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <Header />
      <div className="my-account-area">
        <div className="container profile-container">
          <div className="console.log(editedUser)my-account">
            <div className="row jutify-content-center">
              <div className="column">
                <div className="panel-group">
                  <div className="panel">
                    <div className="my-account-menu-update">
                      <a>MY Personal Information</a>
                    </div>

                    <div className="panel-body">
                      <form>
                        <div className="billing-details shop-cart-table">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter First name"
                              name="firstName"
                              value={editedUser.firstName}
                              // value={editedUser.name}
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter last name"
                              value={editedUser.lastName}
                              name="lastName"
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Email"
                              value={editedUser.email}
                              name="email"
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <div style={{ display: "inline-flex" }}>
                              {editedUser.gender === "male" ? (
                                <input type="radio" value="Male" checked />
                              ) : (
                                <input type="radio" value="Male" />
                              )}
                              Male
                              {editedUser.gender === "female" ? (
                                <input type="radio" value="Female" checked />
                              ) : (
                                <input type="radio" value="Female" />
                              )}
                              Female
                            </div>
                          </div>
                          <br />
                          <div>
                            <input
                              type="number"
                              placeholder="Enter mobile number"
                              value={editedUser.mobileNumber}
                              name="mobileNumber"
                              onChange={handleChange}
                            />
              
                          </div>
                          <br />
                        </div>
                      </form>

                      <div>
                        <button
                          type="submit"
                          className="button-one submit-button"
                          onClick={handleSubmit}
                        >
                          Update
                        </button>
                        <button
                          type="submit"
                          className="button-one submit-button"
                          onClick={() => navigate("/profile-table")}
                        >
                          Back
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
export default UpdateProfile;
