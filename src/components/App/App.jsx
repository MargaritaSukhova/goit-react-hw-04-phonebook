import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Title, SubTitle } from '../App/App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contatcs) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.checkContacts(name)) {
      return alert(`${name} is already in contacts list`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  checkContacts = name => {
    const normalizedName = name.toLocaleLowerCase();
    return this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedName
    );
  };

  handleFilerChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handleContactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacs = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handleFormSubmit} />
        <SubTitle>Contacts</SubTitle>
        <Filter
          value={this.state.filter}
          onChangeFilter={this.handleFilerChange}
        />
        <ContactList
          contacts={visibleContacs}
          onContactDelete={this.handleContactDelete}
        />
      </Container>
    );
  }
}

export default App;
