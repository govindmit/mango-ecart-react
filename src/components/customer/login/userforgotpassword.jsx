import { useState } from "react";
import Header from "../../../theme/frontend/header";
import { toast } from "react-toastify";
import { forgetPasswordUser } from "../../../apis/users/auth";

const UserForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (email === "") {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }

    if (email) {
      const userData = { email: email };
      {
        forgetPasswordUser(userData)
          .then((res) => {
            console.log(res)
            let data = res.data;
            if (data.isError) {
              toast.error(data.message);
            }
            else
            {
              toast.success(data.result);
            }
          })
          .catch((e) => {
           toast.error("Something wrong, Api is not working")
          });
      }
    }
  };
  return (
    <>
      <Header />
      <div className="login-area">
        <div className="container">
          <form autoComplete="on" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="customer-login text-left">
                  <h4 className="title-1">Forget Password</h4>
                  <p className="text-gray">
                    Please enter your registered email address
                  </p>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      onChange={(e) => {setEmail(e.target.value), setErrors(" ")}}
                    />
                    {errors.email && (
                      <span className="danger ng-star-inserted">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <br />
                  <button
                    className="button-one submit-button mt-15"
                    type="submit"
                  >
                   Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserForgotPassword;
