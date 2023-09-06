import { useState } from 'react';
import './style.css'
const BillingAddress = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, SetNumber] = useState("");
    const [address, SetAddress] = useState("");
    const [city, setCity] = useState("")
  return (
    <>
      <div>
        <div className="billing-details">
          <div className="heading-container">
            <h4>Billing details</h4>
          </div>
          <form>
            <div className="form-group">
              <label>Full Name:</label>
              <input className='form-control' type="text" placeholder="Enter full Name" />
            </div>
            <br />
            <div className="form-group">
              <label>Email:</label>
              <input className='form-control' type="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Country Code:</label>
              <select className='form-control'>
                <option>Select a country code</option>
                <option>USA (+1)</option>
                <option>India (+91)</option>
              </select>
            </div>
            <br/>
            <div className="form-group">
             <label>Mobile Number:</label>
             <input className='form-control' type="number" placeholder="Enter Last Mobile Number"></input>
            </div>
            <br/>
            <div className="form-group">
              <label>Address:</label>
              <input className='form-control' type="text" placeholder="Enter address"></input>
            </div>
            <div className="form-group">
                <label>Country:</label>
                <select className='form-control'>
                    <option>Choose your country</option>
                    <option>India</option>
                    <option>United States</option>
                </select>
            </div>
            <div className="form-group">
                 <label>State:</label>
                 <select className='form-control'>
                    <option>Choose Your State</option>
                 </select>
            </div>
            <br/>
            <div className="form-group">
               <label>City:</label>
               <input className='form-control' type="text" placeholder="Enter City"></input>
            </div>
            <br/>
            <div className="form-group">
              <label>Postcode:</label>
              <input className='form-control' type="text" placeholder="Enter Post Code"></input>
            </div>
            <br/>
          </form>


          <div>
            <div className="custom-control custom-checkbox">
               <input className="custom-control-input" type="checkbox"></input>
               <label className='custom-control-label'>Shipping address same as billing address</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BillingAddress;
