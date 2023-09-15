import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };


  handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter),)
  }

  render() {
    const findContact = this.findContact()
    const { filter, contacts } = this.state;


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={findContact} />
      </div>
    );
  }
}


