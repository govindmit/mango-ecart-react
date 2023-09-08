import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../../../theme/frontend/header";
import "./style.css";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../../apis/users/auth";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  // const [editedUser, setEditedUser] = useState();
  
  useEffect(() => {
    getUser()
      .then((data) => {
        setUsers(data.data.result.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };
  const handleSubmit = (e)=>
  {
     e.preventDefault();
     const newErrors ={};
  }
 const handleClick = () =>
 {
   updateUser() 
   .then((data)=>
   {
     console.log(data);
    // setUsers(updateUser)
    // alert("update Successfully");
    navigate("/profile-table");
   })
   .catch((e) =>
   {
     console.log("error", e)
   })
 }
  return (
    <>
      <Header />
      <div className="my-account-area">
        <div className="container profile-container">
          <div className="my-account">
            <div className="row jutify-content-center">
              <div className="column">
                <div className="panel-group">
                  <div className="panel">
                    <div className="my-account-menu">
                      <a>MY Personal Information</a>
                    </div>
                    <div className="panel-body">
                      <div className="billing-details shop-cart-table">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter First name"
                              name="firstName"
                              value={users.firstName}
                              // value={editedUser.name}
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter last name"
                              value={users.lastName}
                              name="lastName"
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Email"
                              value={users.email}
                              name="email"
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <div style={{ display: "inline-flex" }}>
                              <input type="radio" value="Male" />
                              Male
                              <input type="radio" value="female" /> Female
                            </div>
                          </div>
                          <br />
                          <div>
                            <input
                              type="number"
                              placeholder="Enter mobile number"
                              value={users.mobileNumber}
                              name="mobileNumber"
                              onChange={handleChange}
                            />
                          </div>
                          <br />
                        </form>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="button-one submit-button"
                          onClick={handleClick}
                        >
                          Update
                        </button>
                        <button
                          type="submit"
                          className="button-one submit-button"
                         
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
