

import {Routes, Route} from 'react-router-dom'
import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import RenderData from '../pages/RenderData'

const RouterElements = () => {
  return (
    
    <Routes>
        <Route path='/' element={<RegistrationForm/>} />
        <Route path='/login'  element={<LoginPage/>} />
        <Route path='/logout' element={<LogoutPage/>}/>
        <Route path='/formData' element={<RenderData/>}/>
    </Routes> 
    
    )
}

export default RouterElements