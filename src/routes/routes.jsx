import React from 'react'
import { Route, Routes } from 'react-router'
import Frontend from '../components/frontEnd/home/index' 
import Admin from '../components/admin/dashboard/index'
import Registration from '../components/customer/registration'
import Dashboard from '../components/admin/dashboard/dashboard'
import Login from '../components/admin/dashboard/login'
import Forgotpassword from '../components/admin/dashboard/forgotpassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function routes() {
let adminlogin = localStorage.getItem('token');
  return (
    <>
     <ToastContainer />
<Routes>
    <Route path="/"  element={<Frontend/>}/>
    <Route path="/admin"  element={<Admin login = {false}/>}/>
    <Route path="/register" element={<Registration/>}/>
        <Route path="/"  element={<Frontend/>}/>
        <Route path="/admin/"  element={adminlogin ? <Dashboard/> : <Login/>}/>
        <Route path="/admin/dashboard"  element={adminlogin ? <Dashboard/> : <Login/>}/>
        <Route path="/admin/forgotpassword"  element={adminlogin ? <Dashboard/> : <Forgotpassword/>}/>
       
</Routes>
    </>
    )
}

export default routes