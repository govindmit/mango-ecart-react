import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Route, Routes } from "react-router";
import Login from "../components/admin/login";
import Forgotpassword from "../components/admin/forgotpassword";
import Adminresetpassword from "../components/admin/resetpassword";
import Frontend from "../components/frontEnd/home/index";
import Admin from "../components/admin/dashboard/dashboardinfo";
import Registration from "../components/customer/registration";
import Bcndashboard from "../components/admin/dashboard/dashboardinfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bcndcategory from "../components/admin/dashboard/category";
import Bcndattribute from "../components/admin/dashboard/attribute";
import Bcndattributefamily from "../components/admin/dashboard/attributefamily";
import Bcndproducts from "../components/admin/dashboard/products";
import Bcndbanners from "../components/admin/dashboard/banners";
import Bcndorders from "../components/admin/dashboard/orders";
import Bcndinvoices from "../components/admin/dashboard/Invoices";
import Bcndshipmments from "../components/admin/dashboard/shipmments";
import Bcndrefunds from "../components/admin/dashboard/refund";
import BcndstaticPage from "../components/admin/dashboard/staticpages";
import Bcndconfiguration from "../components/admin/dashboard/configure";
import Bcndcontactconfig from "../components/admin/dashboard/contactusconfig";
import BcndhomePage from "../components/admin/dashboard/homepage";
import BcndemailSub from "../components/admin/dashboard/emailsub";
import BcndcontactAdmin from "../components/admin/dashboard/contactadmin";
import OrderDetail from "../components/admin/order/order-detail";
import { Dashboard } from "@mui/icons-material";
import UserLogin from "../components/customer/login/userlogin";
import Profile from "../components/customer/customerProfile/profile";
import UserForgotPassword from "../components/customer/login/userforgotpassword";
import UpdateProfile from "../components/customer/customerProfile/updateProfile";
import BasicTabs from "../components/customer/customerBilling/basictabs";
import AddressList from "../components/customer/customerBilling/addresslist";
import BillingAddress from "../components/customer/customerBilling/billingaddress";
import ProductsPage from "../components/frontEnd/product";
import Aboutus from "../components/frontEnd/aboutus";
import Contact from "../components/frontEnd/contactus";
import Verification from "../components/customer/verification";
import ProductDetails from "../theme/frontend/productdetails";
import Cart from "../components/customer/cart/cart"


function routes() {
  let adminlogin = localStorage.getItem("token");
  let customerlogin = localStorage.getItem("token");

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/" element={<Frontend />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userforgotpassword" element={<UserForgotPassword />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route
          path="/profile-table"
          element={customerlogin ? <Profile /> : <UserLogin />}
        />
        <Route
          path="/profile"
          element={customerlogin ? <UpdateProfile /> : <UserLogin />}
        />
        <Route
          path="/my-address"
          element={customerlogin ? <BasicTabs /> : <UserLogin />}
        />

        <Route
          path="/my-new-address"
          element={customerlogin ? <BillingAddress /> : <UserLogin />}
        />

        <Route path="/my-address" element={customerlogin ? <BasicTabs/> : <UserLogin/>}/>
  
        <Route path="/my-new-address" element={<BillingAddress/>}/>
      
        <Route path="/my-new-address" element={customerlogin ? <BillingAddress/>:<UserLogin/>}/>

        <Route path="/admin" element={<Admin login={true} />} />

        <Route path="/" element={<Frontend />} />
        
       
       

        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Frontend />} />
        <Route path="/verification" element={<Verification />} />


        {/*Admin Routs Start */}

        <Route
          path="/admin/"
          element={adminlogin ? <Bcndashboard /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={adminlogin ? <Bcndashboard /> : <Login />}
        />
        <Route
          path="/admin/category-list"
          element={adminlogin ? <Bcndcategory /> : <Login />}
        />
        <Route
          path="/admin/attribute-list"
          element={adminlogin ? <Bcndattribute /> : <Login />}
        />
        <Route
          path="/admin/attribute-family"
          element={adminlogin ? <Bcndattributefamily /> : <Login />}
        />
        <Route
          path="/admin/products"
          element={adminlogin ? <Bcndproducts /> : <Login />}
        />
        <Route
          path="/admin/banners"
          element={adminlogin ? <Bcndbanners /> : <Login />}
        />
        <Route
          path="/admin/orders"
          element={adminlogin ? <Bcndorders /> : <Login />}
        />
        <Route
          path="/admin/invoices"
          element={adminlogin ? <Bcndinvoices /> : <Login />}
        />
        <Route
          path="/admin/shipmments"
          element={adminlogin ? <Bcndshipmments /> : <Login />}
        />
        <Route
          path="/admin/refunds"
          element={adminlogin ? <Bcndrefunds /> : <Login />}
        />
        <Route
          path="/admin/pages-list"
          element={adminlogin ? <BcndstaticPage /> : <Login />}
        />
        <Route
          path="/admin/configure"
          element={adminlogin ? <Bcndconfiguration /> : <Login />}
        />
        <Route
          path="/admin/contactUs-configure"
          element={adminlogin ? <Bcndcontactconfig /> : <Login />}
        />
        <Route
          path="/admin/manage-home-page"
          element={adminlogin ? <BcndhomePage /> : <Login />}
        />
        <Route
          path="/admin/email-subscribe-list"
          element={adminlogin ? <BcndemailSub /> : <Login />}
        />
        <Route
          path="/admin/contact-to-admin"
          element={adminlogin ? <BcndcontactAdmin /> : <Login />}
        />
        <Route
          path="/admin/forgotpassword"
          element={adminlogin ? <Bcndashboard /> : <Forgotpassword />}
        />
        <Route
          path="/admin/reset-password"
          element={adminlogin ? <Bcndashboard /> : <Adminresetpassword />}
        />
        {/*Admin Routs End*/}
        <Route
          path="/admin/"
          element={adminlogin ? <Bcndashboard /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={adminlogin ? <Bcndashboard /> : <Login />}
        />
        <Route
          path="/admin/category-list"
          element={adminlogin ? <Bcndcategory /> : <Login />}
        />
        <Route
          path="/admin/attribute-list"
          element={adminlogin ? <Bcndattribute /> : <Login />}
        />
        <Route
          path="/admin/attribute-family"
          element={adminlogin ? <Bcndattributefamily /> : <Login />}
        />
        <Route
          path="/admin/products"
          element={adminlogin ? <Bcndproducts /> : <Login />}
        />
        <Route
          path="/admin/banners"
          element={adminlogin ? <Bcndbanners /> : <Login />}
        />
        <Route
          path="/admin/orders"
          element={adminlogin ? <Bcndorders /> : <Login />}
        />
        <Route
          path="/admin/invoices"
          element={adminlogin ? <Bcndinvoices /> : <Login />}
        />
        <Route
          path="/admin/shipmments"
          element={adminlogin ? <Bcndshipmments /> : <Login />}
        />
        <Route
          path="/admin/refunds"
          element={adminlogin ? <Bcndrefunds /> : <Login />}
        />
        <Route
          path="/admin/pages-list"
          element={adminlogin ? <BcndstaticPage /> : <Login />}
        />
        <Route
          path="/admin/configure"
          element={adminlogin ? <Bcndconfiguration /> : <Login />}
        />
        <Route
          path="/admin/contactUs-configure"
          element={adminlogin ? <Bcndcontactconfig /> : <Login />}
        />
        <Route
          path="/admin/manage-home-page"
          element={adminlogin ? <BcndhomePage /> : <Login />}
        />
        <Route
          path="/admin/email-subscribe-list"
          element={adminlogin ? <BcndemailSub /> : <Login />}
        />
        <Route
          path="/admin/contact-to-admin"
          element={adminlogin ? <BcndcontactAdmin /> : <Login />}
        />
        <Route
          path="/admin/forgotpassword"
          element={adminlogin ? <Bcndashboard /> : <Forgotpassword />}
        />
        <Route
          path="/admin/reset-password"
          element={adminlogin ? <Bcndashboard /> : <Adminresetpassword />}
        />
        <Route
          path="/admin/order-details/:id"
          element={adminlogin ? <OrderDetail /> : <Login />}
        />

      
        <Route path="/admin/" element={adminlogin ? <Bcndashboard /> : <Login />} />
        <Route path="/admin/dashboard" element={adminlogin ? <Bcndashboard /> : <Login />} />
        <Route path="/admin/category-list" element={adminlogin ? <Bcndcategory /> : <Login />} />
        <Route path="/admin/attribute-list" element={adminlogin ? <Bcndattribute /> : <Login />} />
        <Route path="/admin/attribute-family" element={adminlogin ? <Bcndattributefamily /> : <Login />} />
        <Route path="/admin/products" element={adminlogin ? <Bcndproducts /> : <Login />} />
        <Route path="/admin/banners" element={adminlogin ? <Bcndbanners /> : <Login />} />
        <Route path="/admin/orders" element={adminlogin ? <Bcndorders /> : <Login />} />
        <Route path="/admin/invoices" element={adminlogin ? <Bcndinvoices /> : <Login />} />
        <Route path="/admin/shipmments" element={adminlogin ? <Bcndshipmments /> : <Login />} />
        <Route path="/admin/refunds" element={adminlogin ? <Bcndrefunds /> : <Login />} />
        <Route path="/admin/pages-list" element={adminlogin ? <BcndstaticPage /> : <Login />} />
        <Route path="/admin/configure" element={adminlogin ? <Bcndconfiguration /> : <Login />} />
        <Route path="/admin/contactUs-configure" element={adminlogin ? <Bcndcontactconfig /> : <Login />} />
        <Route path="/admin/manage-home-page" element={adminlogin ? <BcndhomePage /> : <Login />} />
        <Route path="/admin/email-subscribe-list" element={adminlogin ? <BcndemailSub /> : <Login />} />
        <Route path="/admin/contact-to-admin" element={adminlogin ? <BcndcontactAdmin /> : <Login />} />
        <Route path="/admin/forgotpassword" element={adminlogin ? <Bcndashboard /> : <Forgotpassword />} />
        <Route path="/admin/reset-password" element={adminlogin ? <Bcndashboard /> : <Adminresetpassword />} />
        <Route path = "/admin/order-details/:id" element = {adminlogin? <OrderDetail /> : <Login />}/>


        {/*Admin Routs End*/}
      </Routes>
    </>
  );
}

export default routes;
