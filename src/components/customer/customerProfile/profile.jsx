import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([
    {
      name: "Govind",
      lastname: "Namdev",
      gender: "Male",
      contact: "9876543210",
      email: "govind.mangoitsolutions@gmail.com",
    },
  ]);

  const handleEdit = (id) => {

    navigate(`/profile/${id}`,{state:{data}});
  };

  // const updatedData = (location.state.updatedData);

  // setTableData(location.state.updatedData )

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
                    {data.map((item) => (
                    <div className="panel-body">
                      
                        <div className="billing-details shop-cart-table">
                          <table>
                            <tbody key={item.id}>
                              <tr>
                                <td>First Name</td>
                                <td>{item.name}</td>
                              </tr>
                              <tr>
                                <td>Last Name</td>
                                <td>{item.lastname}</td>
                              </tr>
                              <tr>
                                <td>Gender</td>
                                <td>{item.gender}</td>
                              </tr>
                              <tr>
                                <td>Contact</td>
                                <td>{item.contact}</td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td>{item.email}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      
                      <div>
                        <button
                          // to="/profile"
                          type="submit"
                          className="button-one submit-button"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    ))}
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
