import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  const handleLogout = () => {
    const storedToken = localStorage.getItem('authToken');


    fetch('https://connections-api.herokuapp.com/users/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem('authToken');
        navigate('/login'); 
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    
    fetch('https://connections-api.herokuapp.com/users/current', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserEmail(data.email);
      })
      .catch((error) => {
        console.error('Error fetching user email:', error);
      });
  }, []);

  return (
    <div>
      <p>{userEmail}</p>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
