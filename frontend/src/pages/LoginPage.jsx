

import React from 'react'

const LoginPage = () => {
  const Onclickhandeller=()=>{
    Navigate('./logout')
  }


  return (
    <div>
      Welcome {p.name} !
     logOut:
     <button onClick={Onclickhandeller}>Logout</button>

    </div>
  )
}

export default LoginPage