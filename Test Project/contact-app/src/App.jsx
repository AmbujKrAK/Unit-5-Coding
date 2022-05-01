
import React from 'react';
import './App.css';
import { Header } from './components/header';
import { ContactList } from './components/contactList';
import { ContactCard } from './components/contactCard';
import AddContact from './components/AddContact';

function App() {
  const contacts = [
    {
      id: "1",
      "name": "Ambuj",
      "email": "ambuj02dbz@gmail.com",
    },
    {
      id: "1",
      "name": "Ankit",
      "email": "ankitambuj02dbz@gmail.com",
    },

  ]
  return (
    <div className='ui container'>
      <Header>This is a Header</Header>
      <AddContact />
      <ContactList contact={contacts}>This is a ContactList</ContactList>
      <ContactCard />
    </div>
  );
}

export default App;
