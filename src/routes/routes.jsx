import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../components/admin/login'
import Forgotpassword from '../components/admin/forgotpassword'
import Adminresetpassword from '../components/admin/resetpassword'
import Frontend from '../components/frontEnd/home/index'
import Admin from '../components/admin/dashboard'
import Registration from '../components/customer/registration'
import Dashboard from '../components/admin/dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function routes() {
  let adminlogin = localStorage.getItem('token');
  return (
    <>
     <ToastContainer />
<Routes>
        <Route path="/"  element={<Frontend/>}/>
        <Route path="/admin/"  element={adminlogin ? <Dashboard/> : <Login/>}/>
        <Route path="/admin/forgotpassword"  element={adminlogin ? <Dashboard/> : <Forgotpassword/>}/>
        <Route path="/admin/reset-password"  element={adminlogin ? <Dashboard/> : <Adminresetpassword/>}/>
       
</Routes>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Frontend />} />
        <Route path="/admin" element={<Admin login={false} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<Frontend />} />
        <Route path="/admin/" element={adminlogin ? <Dashboard /> : <Login />} />
        <Route path="/admin/dashboard" element={adminlogin ? <Dashboard /> : <Login />} />
        <Route path="/admin/forgotpassword" element={adminlogin ? <Dashboard /> : <Forgotpassword />} />

      </Routes>
    </>
  )
}

export default routes