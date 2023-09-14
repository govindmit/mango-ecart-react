import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../../theme/frontend/header";
import "./style.css";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../../apis/users/auth";
import { useUser } from "../../../context/usercontext";
import { toast } from "react-toastify";
import NavBar from "../../../theme/frontend/header/navBar";
import Banner from "../../../theme/frontend/banner";
import Footer from "../../../theme/frontend/fotter";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [editedUser, setEditedUser] = useState(user);
  const [data, setData] = useState([]);

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
        if (data.isError) {
          toast.error(data.data.message);
        } else {
          toast.success(data.data.result.message);
          navigate("/profile-table");
        }
      })
      .catch((e) => {
        toast.error("Something wrong,Api not working");
      });
  };

  return (
    <>
      <Header />
      <NavBar/>
      <Banner data={"My Account"}/>
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
                              <input
                                type="radio"
                                value="male"
                                name="gender"
                                checked={editedUser.gender === "male"}
                                onChange={handleChange}
                              />
                              Male
                              <input
                                type="radio"
                                value="female"
                                name="gender"
                                checked={editedUser.gender === "female"}
                                onChange={handleChange}
                              />
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
      <Footer/>
    </>
  );
};
export default UpdateProfile;
