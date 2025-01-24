import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact, ContactManager } from './components/localStorageUtils';
import './App.css';

const App = () => {
  const [contactManager] = useState(new ContactManager());
  const [contacts, setContacts] = useState(contactManager.contacts);

  useEffect(() => {
    setContacts(contactManager.loadFromLocalStorage());
  }, []);

  const addContact = (contact) => {
    const newContact = new Contact(contact.name, contact.phone);
    const updatedContacts = contactManager.add(newContact);
    setContacts([...updatedContacts]);
  };

  const deleteContact = (index) => {
    const contactToDelete = contacts[index];
    const updatedContacts = contactManager.delete(contactToDelete);
    setContacts([...updatedContacts]);
  };

  return (
    <div>
      <h1>Imenik</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
