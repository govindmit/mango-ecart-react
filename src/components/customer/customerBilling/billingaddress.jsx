import { useEffect, useState } from "react";
import "./style.css";
import {
  addAddress,
  getUserAddressById,
  updateAddress,
} from "../../../apis/users/auth";
import { toast } from "react-toastify";
import { useUser } from "../../../context/usercontext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../theme/frontend/header";

const BillingAddress = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {addressType} = location.state;
  console.log(addressType)
  const { addressId } = useUser();
  const [errors, setErrors] = useState({});
  const { addresses, setAddresses } = useUser();
  const [formData, setFormData] = useState({
    addressType: addressType,
    firstName: "",
    lastName: "",
    gender: "",
    address1: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    countrycode: "",
    fullname: "",
  });

  const formValue = formData[0];
  useEffect(() => {
    if (addressId) {
      getUserAddressById(addressId)
        .then((data) => {
          const addressData = data.data.result.addressData;
          const { firstName, lastName } = addressData;
          const fullName = `${firstName} ${lastName}`;
          setFormData({
            ...addressData,
            firstName: firstName,
            lastName: lastName,
            fullname: fullName,
          });
        })
        .catch((e) => {
          console.log(e, "error");
        });
    }
  }, [addressId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      setFormData({
        ...formData,
        fullname: `${formData.firstName} ${formData.lastName}`,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
      setErrors("");
    }

    if (addressId) {
      if (name === "fullname") {
        const [newFirstName, newLastName] = value.split("");
        setFormData({
          ...formValue,
          firstName: newFirstName,
          lastName: newLastName,
          [name]: value,
        });
      } else {
        setFormData({
          ...formValue,
          [name]: value,
        });
        setErrors("");
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (addressId) {
      if(formValue?.email === "")
      {
        newErrors.email = "Email is required";
      }
      setErrors(newErrors);
      if(Object.keys(newErrors).length === 0)
      {
        updateAddress(addressId, formData)
        .then((res) => {
          let data = res.data;
          if (data.isError) {
            toast.error(data.message);
          } else {
            toast.success(data.result.message);
            navigate("/my-address");
          }
        })
        .catch((e) => {
          console.log(e, "error");
        });
      }
     
    } else {
      if (formData.fullname.trim() === "") {
        newErrors.fullname = "Full Name is required";
      }

      if (formData.email.trim() === ""){
        newErrors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
      ) {
        newErrors.email = "Email should have @";
      }

      if (formData.countrycode.trim() === "") {
        newErrors.countrycode = "Country Code is required";
      }

      if (formData.phone.trim() === "") {
        newErrors.phone = "Mobile Number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Mobile number should be only 10 digit";
      }
      if (formData.address1.trim() === "") {
        newErrors.address1 = "Address is required";
      }
      if (formData.country.trim() === "") {
        newErrors.country = "Country is required";
      }
      if (formData.state.trim() === "") {
        newErrors.state = "State is required";
      }
      if (formData.city.trim() === "") {
        newErrors.city = "City is required";
      }
      if (formData.postcode.trim() === "") {
        newErrors.postcode = "Post Code is required";
      }
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        const [firstName, lastName] = formData.fullname.split(" ");
        addAddress({
          ...formData,
          firstName,
          lastName,
        })
          .then((res) => {
            let data = res.data;
            if (data.isError) {
              toast.error(data.message);
            } else {
              toast.success(data.result.message);
              navigate("/my-address");
            }
          })
          .catch((e) => {
            console.log("error", e);
          });
      }
    }
  };
  return (
    <>
    <Header/>
      <div className="customer-column">
        <div className="customer-billing-details">
          { 
    addressId  ?  <h4>{( formValue?.addressType)}</h4>
     :(addressType === "Billing" ? (
          <div className="heading-container">
          <h4>Billing details</h4>
        </div>
        ):(
          <div className="heading-container">
          <h4>Shipping details</h4>
        </div>
        )) 
          }
          
          <form
            autoComplete="on"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              handleSubmit(); // Call your submit function manually
            }}
          >
            <div className="form-group">
              <label>Full Name:</label>
              <input
                className="form-control"
                type="text"
                name="fullname"
                value={
                  addressId
                    ? `${formValue?.firstName} ${formValue?.lastName}`
                    : formData.fullname
                }
                placeholder="Enter full Name"
                onChange={handleChange}
              />
              {errors.fullname && (
                <span className="danger ng-star-inserted">
                  {errors.fullname}
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter email"
                value={addressId ? formValue?.email : formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="danger ng-star-inserted">{errors.email}</span>
              )}
            </div>
            <div className="select-form-group">
              <label>Country Code:</label>
              <select
                className="form-control-select"
                value={formData.countrycode}
                onChange={handleChange}
                name="countrycode"
              >
                <option value="">Select a country code</option>
                <option value="USA">USA (+1)</option>
                <option value="India">India (+91)</option>
              </select>
              {errors.countrycode && (
                <span className="danger ng-star-inserted">
                  {errors.countrycode}
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                placeholder="Enter Last Mobile Number"
                value={addressId ? formValue?.phone : formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="danger ng-star-inserted">{errors.phone}</span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Address:</label>
              <input
                className="form-control"
                type="text"
                name="address1"
                placeholder="Enter address"
                value={addressId ? formValue?.address1 : formData.address1}
                onChange={handleChange}
              />
              {errors.address1 && (
                <span className="danger ng-star-inserted">
                  {errors.address1}
                </span>
              )}
            </div>
            <div className="select-form-group">
              <label>Country:</label>
              <select
                className="form-control-select"
                value={addressId ? formValue?.country : formData.country}
                onChange={handleChange}
                name="country"
              >
                <option value="">Choose your country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
              </select>
              {errors.country && (
                <span className="danger ng-star-inserted">
                  {errors.country}
                </span>
              )}
            </div>
            <div className="select-form-group">
              <label>State:</label>
              <select
                className="form-control-select"
                name="state"
                value={addressId ? formValue?.state : formData.state}
                onChange={handleChange}
              >
                <option value="">Choose Your State</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
              </select>
              {errors.state && (
                <span className="danger ng-star-inserted">{errors.state}</span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>City:</label>
              <input
                className="form-control"
                type="text"
                name="city"
                placeholder="Enter City"
                value={addressId ? formValue?.city : formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <span className="danger ng-star-inserted">{errors.city}</span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Postcode:</label>
              <input
                className="form-control"
                type="text"
                name="postcode"
                placeholder="Enter Post Code"
                value={addressId ? formValue?.postcode : formData.postcode}
                onChange={handleChange}
              />
              {errors.postcode && (
                <span className="danger ng-star-inserted">
                  {errors.postcode}
                </span>
              )}
            </div>
            <br />
            <button type="submit">Save and Deliver Here</button>
            <button type="submit">
              <Link to="/my-address"> Cancel </Link>
            </button>
          </form>

          <div>
            <div className="custom-control custom-checkbox">
              <input className="custom-control-input" type="checkbox"></input>
              <label className="custom-control-label">
                Shipping address same as billing address
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BillingAddress;
