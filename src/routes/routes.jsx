import React from 'react'
import { Route, Routes } from 'react-router'
import Frontend from '../components/frontEnd/home/index' 
import Dashboard from '../components/admin/dashboard'
import Login from '../components/admin/login'
import Forgotpassword from '../components/admin/forgotpassword'
import Adminresetpassword from '../components/admin/resetpassword'
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
    </>
    )
}

export default routes