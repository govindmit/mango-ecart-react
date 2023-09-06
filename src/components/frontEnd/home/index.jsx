import React from 'react'
import Header from '../../../theme/frontend/header'
import Login from '../../customer/login/userlogin'
import CustomerProfile from '../../customer/customerProfile/profile'
import BasicTabs from '../../customer/customerBilling/basictabs'


function index() {

  return (
   <>
      <Header/>
      {/* <Login/> */}
      {/* <CustomerProfile/> */}
      <BasicTabs/>
   </>
  )
}

export default index