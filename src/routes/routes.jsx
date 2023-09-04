import React from 'react'
import { Route, Routes } from 'react-router'
import Frontend from '../components/frontEnd/home/index' 
import Admin from '../components/admin/dashboard/index'

function routes() {
  return (
    <>
<Routes>
    <Route path="/"  element={<Frontend/>}/>
    <Route path="/admin"  element={<Admin login = {false}/>}/>
</Routes>
    </>
    )
}

export default routes