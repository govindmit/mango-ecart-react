import React from 'react'
import { Route, Routes } from 'react-router'
import Frontend from '../components/frontEnd/home/index' 
import Admin from '../components/admin/dashboard/index'
import Login from '../components/customer/login'

function routes() {
  return (
    <>
<Routes>
    <Route path="/"  element={<Frontend/>}/>
    <Route path="/admin"  element={<Admin login = {true}/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>
    </>
    )
}

export default routes