import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.phone}
          <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
