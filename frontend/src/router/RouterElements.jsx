

import {Routes, Route} from 'react-router-dom'
import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'

const RouterElements = () => {
  return (
    
    <Routes>
        <Route path='/' element={<RegistrationForm/>} />
        <Route path='/login'  element={<LoginPage/>} />
        <Route path='/logout' element={<LogoutPage/>}/>
    </Routes> 
    
    )
}

export default RouterElements