import React from "react";
import { Route, Routes } from "react-router";
import Frontend from "../components/frontEnd/home/index";
import Admin from "../components/admin/dashboard/dashboard";
import UserLogin from "../components/customer/login/userlogin";
import Dashboard from "../components/admin/dashboard/dashboard";
import Login from "../components/admin/dashboard/login";
import Forgotpassword from "../components/admin/dashboard/forgotpassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForgotPassword from "../components/customer/login/userforgotpassword";
import UpdateProfile from "../components/customer/customerProfile/updateProfile";
import Profile from "../components/customer/customerProfile/profile";
// import Frontend from "../components/frontEnd/home/index";
// import Admin from "../components/admin/dashboard/dashboard";
import Registration from "../components/customer/registration";
// import Dashboard from "../components/admin/dashboard/dashboard";
// import Login from "../components/admin/dashboard/login";
// import Forgotpassword from "../components/admin/dashboard/forgotpassword";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function routes() {
  let adminlogin = localStorage.getItem("token");
  let customerlogin = localStorage.getItem("token");
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/userlogin" element={<UserLogin login={true}/>} />
        <Route path="/userforgotpassword" element={<UserForgotPassword />} />
        <Route
          path="/profile-table"
          element={customerlogin ? <Profile /> : <UserLogin />}
        ></Route>
        <Route path="/profile" element={<UpdateProfile />}></Route>

        <Route path="/admin" element={<Admin login={true} />} />

        <Route path="/" element={<Frontend />} />
        <Route
          path="/admin/"
          element={adminlogin ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={adminlogin ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin/forgotpassword"
          element={adminlogin ? <Dashboard /> : <Forgotpassword />}
        />

        <Route path="/admin" element={<Admin login={false} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Frontend />} />
        <Route
          path="/admin/"
          element={adminlogin ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={adminlogin ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin/forgotpassword"
          element={adminlogin ? <Dashboard /> : <Forgotpassword />}
        />
      </Routes>
    </>
  );
}

export default routes;
