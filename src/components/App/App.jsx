import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title, SubTitle } from '../App/App.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? '';
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (checkContacts(name)) {
      return alert(`${name} is already in contacts list!`);
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const checkContacts = name => {
    const normalizedName = name.toLocaleLowerCase();
    return contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
  };

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  const handleContactDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleFormSubmit} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={getVisibleContacts()}
        onContactDelete={handleContactDelete}
      />
    </Container>
  );
};

export default App;
