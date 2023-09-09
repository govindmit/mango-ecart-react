import { useEffect, useState } from "react";
import "./style.css";
import { addAddress } from "../../../apis/users/auth";
import PaymentDetails from "./paymentdetails";
import { toast } from "react-toastify";

const BillingAddress = () => {

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullname:"",
    countrycode:"",
    phone:"",
    address:"",
    country:"",
    state:"",
    city:"",
    postcode:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors("");
  };

  const handleSubmit = () => {
    const fullname = `${formData.firstname} ${formData.lastname}`
    const newErrors ={};
    if(formData.fullname.trim() === '')
    {
      newErrors.fullname="Full Name is required";
    }
    if(formData.email.trim() === '')
    {
      newErrors.email="Email is required";
    }
    if(formData.countrycode.trim() === '')
    {
      newErrors.countryCode="Country Code is required";
    }
    if(formData.phone.trim() === '')
    {
      newErrors.phone = "Mobile Number is required";
    }
    if(formData.address.trim() === "")
    {
      newErrors.address = "Address is required";
    }
    if(formData.country.trim() === "")
    {
      newErrors.country="Country is required";
    }
    if(formData.state.trim() === "")
    {
      newErrors.state="State is required";
    }
    if(formData.city.trim() === '')
    {
      newErrors.city = "City is required";
    }
    if(formData.postcode.trim() === "")
    {
      newErrors.postcode = "Post Code is required";
    }
    setErrors(newErrors);
    
addAddress(formData)
      .then((res) => {
        // console.log(res)
        let data = res.data;
        // console.log(data);
        if (data.isError) {
          toast.error(data.message);
        } else {
          toast.success(data.result.message);
        }
      })
      .catch((e) => {
        console.log("error", e);
      });

     return Object.keys(newErrors).length === 0;
  };
  return (
    <>
      <div className="customer-column">
        <div className="customer-billing-details">
          <div className="heading-container">
            <h4>Billing details</h4>
          </div>
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
                value={formData.fullname}
                placeholder="Enter full Name"
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="danger ng-star-inserted">
                  {errors.fullName}
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
                value={formData.email}
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
                value={formData.countryCode}
                onChange={handleChange}
                name="countrycode"
              >
                <option>Select a country code</option>
                <option>USA (+1)</option>
                <option>India (+91)</option>
              </select>
              {errors.countryCode && (
                <span className="danger ng-star-inserted">
                  {errors.countryCode}
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
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && (
                <span className="danger ng-star-inserted">
                  {errors.mobileNumber}
                </span>
              )}
            </div>
            <br />
            <div className="form-group">
              <label>Address:</label>
              <input
                className="form-control"
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="danger ng-star-inserted">
                  {errors.address}
                </span>
              )}
            </div>
            <div className="select-form-group">
              <label>Country:</label>
              <select
                className="form-control-select"
                value={formData.country}
                onChange={handleChange}
                name="country"
              >
                <option>Choose your country</option>
                <option>India</option>
                <option>United States</option>
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
                value={formData.state}
                onChange={handleChange}
              >
                <option>Choose Your State</option>
                <option>Madhya Pradesh</option>
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
                value={formData.city}
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
                value={formData.postCode}
                onChange={handleChange}
              />
              {errors.postCode && (
                <span className="danger ng-star-inserted">
                  {errors.postCode}
                </span>
              )}
            </div>
            <br />
            <button type="submit">Submit</button>
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
