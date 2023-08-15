import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import css from './registrationPage.module.css';

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async () => {
    try {

      const registrationResponse = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        formData
      );

      console.log('Registration successful:', registrationResponse.data);

      // Assuming the backend returns a JWT upon successful registration
      const token = registrationResponse.data.token;

      // Store the JWT in localStorage
      localStorage.setItem('authToken', token);

      // Navigate to a protected route
      navigate('/contacts');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2 className={css.registerPageH2}>Register Page</h2>
      <form className={css.registerPageForm}>
        <label htmlFor="User name" className={css.inputLabelRegister}>
          User name
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange} // Use the handleInputChange function
          className= {css.inputRegister}
        />
        </label>
        <label htmlFor="User email" className={css.inputLabelRegister}>
          User e-mail
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className = {css.inputRegister}
        />
        </label>
       <label htmlFor="User password" className={css.inputLabelRegister}>
          User password
       <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className= {css.inputRegister}
        />
       </label>
       
        <button 
        type="button" 
        onClick={handleRegistration}
        className={css.registerBtn}>
          Register
        </button>
      </form>
    </div>
  );
};
