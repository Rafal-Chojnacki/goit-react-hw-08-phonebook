import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../components/redux/store';
import AddContact from 'components/addContact';
import UserMenu from 'components/UserManu';

const ContactsPage = () => {
  // Get the history object for redirection

  const [contacts, setContacts] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get token from local storage
    const storedToken = localStorage.getItem('storedToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      // Fetch contacts using the API
      fetch('https://connections-api.herokuapp.com/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setContacts(data.contacts);
        })
        .catch((error) => {
          console.error('Error fetching contacts:', error);
        });
    }
  }, [token]);

  

  return (
    <Provider store={store}>
      <UserMenu />
      <AddContact />
    </Provider>
  );
};

export default ContactsPage;
