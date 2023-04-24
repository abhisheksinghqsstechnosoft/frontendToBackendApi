import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginPage = (p) => {
  const navigate= useNavigate()
  const Onclickhandeller=()=>{
    navigate('./logout')
  }

  return (
    <div>
      Welcome {p.name} !
     logOut:
     <button onClick={Onclickhandeller}>Logout</button>
    </div>
  )
};

export default LoginPage;
