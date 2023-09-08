import React, { useState } from 'react'
import Routes from './routes/routes'
import './App.css'
import { UserProvider } from './context/usercontext'

function App() {
  
  return (
    <>
    <UserProvider>
    <div>
    <Routes/>
    </div>
    </UserProvider>
    </>
  )
}

export default App
