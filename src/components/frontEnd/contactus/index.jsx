import ReCAPTCHA from "react-google-recaptcha";
import Banner from "../../../theme/frontend/banner";
import Header from "../../../theme/frontend/header";
import NavBar from "../../../theme/frontend/header/navBar";
import "./style.css";
import configs from "../../../config/config";
import Footer from "../../../theme/frontend/fotter";
import NearMeIcon from "@mui/icons-material/NearMe";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import React, { useState, useEffect, useRef } from "react";
import { contactUs } from "../../../apis/users/home";
import { toast } from "react-toastify";
import {
  GoogleMapsProvider,
  useGoogleMap,
} from "@ubilabs/google-maps-react-hooks";

const Contact = () => {
  const mapOptions = {
    zoom: 12,
    center: {
      lat: 48.7691524,
      lng: 9.906997,
    },
  };
  const [mapContainer, setMapContainer] = useState(null);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!contactData.name.trim()) {
      newErrors.name = "Please Enter the name";
      valid = false;
    }

    if (!contactData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(contactData.email)
    ) {
      newErrors.email = "Please enter the valid email address";
      valid = false;
    }
    if (!contactData.subject.trim()) {
      newErrors.subject = "Please enter the subject";
    }
    if (!contactData.message.trim()) {
      newErrors.message = "Please enter the message";
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() && recaptchaValue) {
      contactUs(contactData)
        .then((res) => {
          let data = res.data;
          console.log(data);
          if (data.isError) {
            toast.error(data.message);
          } else {
            toast.success(data.result.message);
          }
        })
        .catch((error) => {
          toast.error("Something went wrong, Api not working", error);
        });
    } else {
      toast.error("Please Complete the Recaptcha Challange");
    }
  };
  return (
    <>
      <Header />
      <NavBar />
      <Banner data="Contact-Us" />
      <div className="product-area1">
        <div className="contact-container">
          <section id="contact" className="contact">
            <div className="contact-containerbox">
              <div className="section-title text-center">
                <h2>Contact</h2>
                <p>
                  We are here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className="contact-row">
                <div className="contact-col">
                  <div className="info">
                    <div className="address">
                      <i className="info-icon">
                        <NearMeIcon />
                      </i>
                      <h4>Location:</h4>
                      <p></p>
                    </div>

                    <div className="email">
                      <i className="info-icon">
                        <EmailIcon />
                      </i>
                      <h4>Email:</h4>
                      <p>tp@gmail.com</p>
                    </div>

                    <div className="phone">
                      <i className="info-icon">
                        <PhoneEnabledIcon />
                      </i>
                      <h4>Call:</h4>
                      <p>6589451236</p>
                    </div>

                    <div>
                      <div>
                        <GoogleMapsProvider
                          googleMapsAPIKey="AIzaSyBngY4Jr2YE7SYcHLdnVW_cSrcU6S6AXvg"
                          mapOptions={mapOptions}
                          mapContainer={mapContainer}
                        >
                          <div
                            ref={(node) => setMapContainer(node)}
                            style={{ height: "70vh" }}
                          />
                        </GoogleMapsProvider>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-col">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-row space">
                      <div className="contact-form-group">
                        <label>Your Name</label>
                        <input
                          className="contact-form-control space-name"
                          type="text"
                          placeholder="Enter first name"
                          name="name"
                          value={contactData.name}
                          onChange={handleChange}
                        />
                        <span className="danger ng-star-inserted">
                          {error.name}
                        </span>
                      </div>

                      <div className="contact-form-group">
                        <label>Your Email</label>
                        <input
                          className="contact-form-control space-email"
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={contactData.email}
                          onChange={handleChange}
                        />
                        <span className="danger ng-star-inserted">
                          {error.email}
                        </span>
                      </div>
                    </div>

                    <div className="contact-form-group">
                      <label>Subject</label>
                      <input
                        className="contact-form-control"
                        type="text"
                        placeholder="Enter Subject"
                        name="subject"
                        value={contactData.subject}
                        onChange={handleChange}
                      />
                      <span className="danger ng-star-inserted">
                        {error.subject}
                      </span>
                    </div>

                    <div className="contact-form-group">
                      <label>Message</label>
                      <textarea
                        type="text"
                        placeholder="Enter message"
                        name="message"
                        rows={10}
                        className="contact-form-control"
                        value={contactData.message}
                        onChange={handleChange}
                      ></textarea>
                      <span className="danger ng-star-inserted">
                        {error.message}
                      </span>
                    </div>

                    <div className="contact-form-group">
                      <ReCAPTCHA
                        sitekey={configs.RECAPTCHA_KEY}
                        onChange={(value) => setRecaptchaValue(value)}
                      />
                    </div>

                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Contact;
// function Location()
// {
//    const [lat, setLat] = useState(43.68);
//    const [lng, setLng] = useState(-79.43);

//    return(<>
//    <div className="lat-lng ">
//     <input type="number" value={lat} onChange={(event)=> setLat(parseFloat(event.target.value))}
//     step={0.01}/>
//    </div>
//    </>)
// }
