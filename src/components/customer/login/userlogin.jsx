import ReCAPTCHA from "react-google-recaptcha";
import "./style.css";
import { useRef, useState, useEffect } from "react";
import configs from "../../../config/config";
import { userLogin } from "../../../apis/users/auth";
import { toast } from "react-toastify";
import Header from "../../../theme/frontend/header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../theme/frontend/fotter";
import NavBar from "../../../theme/frontend/header/navBar";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Email is required";
    }

    if (password === "") {
      newErrors.password = "password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }

    if (email && password) {
      const userLoginDetails = { email: email, password: password };
      {
        userLogin(userLoginDetails)
          .then((res) => {
            let data = res.data;
            if(data.isError)
            {
              toast.error(data.message);
            }
            else
            {
              let token = data.result.token;
              let user = data.result.user.id;
              toast.success(data.result.message)
              localStorage.setItem('token',token)
              localStorage.setItem('user',user);
              navigate('/profile-header')
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
    <NavBar/>
      <div className="login-area">
        <div className="container">
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="customer-login text-left">
                  <h4 className="title-1">Registered Customers</h4>
                  <p className="text-gray">
                    If you do not have an account with us, Please{" "}
                    <Link className="font-weight-bold small" to='/register'>Register</Link>{" "}
                  </p>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      error
                      onChange={(e) => setPassword(e.target.value)}
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
                    <ReCAPTCHA sitekey={configs.RECAPTCHA_KEY} />
                  </div>
                  <p>
                    <Link className="font-weight-bold small" to="/userforgotpassword">Forgot Password?</Link>
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
      <Footer/>
    </>
  );
};

export default UserLogin;
