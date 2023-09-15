import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }

  findContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter),)
  }

  handleInputSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: ''
    }));
  };

  render() {
    const findContact = this.findContact()
    const { name, number, filter } = this.state;

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
          <label >
            Number
            <input
              type="tel"
              value={number}
              onChange={this.handleInputChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by Name
          <input
            type="text"
            value={filter}
            onChange={this.changeFilter}
          />
        </label>
        <ul>
          {findContact.map((contact) => (
            <li key={contact.id}>{contact.name} : {contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}


