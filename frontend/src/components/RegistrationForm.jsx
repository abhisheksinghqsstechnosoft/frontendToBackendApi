

import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function RegistrationForm() {
    
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    console.log(formData); 

    axios.post('/formData',formData)
    .then(console.log('data send successfully'))
    .catch(e=>console.log(e));
     navigate('/login')// do something with the form data
  };

  return (
    <div>

      <button onClick={()=>{
        navigate('/formData')
      }}>render data</button>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br /><br />

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
