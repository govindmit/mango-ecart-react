import { useLocation, useNavigate,  useParams } from "react-router-dom";
import Header from "../../../theme/frontend/header";
import "./style.css";
import { useState } from "react";

const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const { id } = useParams();
const [formData, setFormData] = useState(data.find((item)=>item.id === parseInt(id)));
const [name, setName] = useState(data[0].name);
const [lastName, setLastName] = useState(data[0].lastname);
const [email, setEmail] = useState(data[0].email);
const [contact, setContact] = useState(data[0].contact)

const handleSubmit = ()=>
{
  e.preventDefault();
  const updatedData = data.map((item)=>
  item.id === formData.id ? formData : item)
  console.log(updatedData);
  navigate("/profile-table",{state:{updatedData}, });
};

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
                              value={name}
                              onChange={(e)=>setName(e.target.value)}
                            
                              
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter last name"
                              value={lastName}
                              onChange={(e)=>setLastName(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <div style={{ display: "inline-flex" }}>
                              Male <input type="radio" value="male"></input>
                              Female
                              <input type="radio" value="female"></input>
                            </div>
                          </div>
                          <br />
                          <div>
                            <input
                              type="number"
                              placeholder="Enter mobile number"
                              value={contact}
                              onChange={(e)=>setContact(e.target.value)}
                            />
                          </div>
                          <br />
                        </form>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="button-one submit-button"
                          
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
