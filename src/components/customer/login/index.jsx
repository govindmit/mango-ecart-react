import ReCAPTCHA from "react-google-recaptcha";
import RECAPTCHA_KEY from "../../../config/config";

import "./style.css";
import { useRef, useState, useEffect} from "react";

const Login = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    let newErrors = {};

    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      (newErrors.email = "Email is required"),
        (newErrors.password = "password is required");
    }

    if (!enteredEmail) {
      newErrors.email = "Email is required";
    }
    if (!enteredPassword) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data:");
    }
  };
  return (
    <>
      <div className="login-area">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="customer-login text-left">
                  <h4 className="title-1">Registered Customers</h4>
                  <p className="text-gray">
                    If you do not have an account with us, Please{" "}
                    <a className="font-weight-bold small">Register</a>{" "}
                  </p>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      ref={emailRef}
                    />
                    {errors.email && (
                      <span className="danger ng-star-inserted">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      ref={passwordRef}
                      //   autoComplete="on"
                    />
                    {errors.password && (
                      <span className="danger ng-star-inserted">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <br />
                  <div className="form-group">
                    <ReCAPTCHA sitekey={RECAPTCHA_KEY} />
                  </div>
                  <p>
                    <a className="font-weight-bold small">Forgot Password?</a>
                  </p>
                  <button
                    type="submit"
                    className="button-one submit-button mt-15"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    </>
  );
};

export default Login;
