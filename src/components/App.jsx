import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  handleInputChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleInputSubmit = event => {
    event.preventDefault();
    const { name } = this.state;

    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: ''
    }));
  };

  render() {
    const { contacts, name } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleInputSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}


