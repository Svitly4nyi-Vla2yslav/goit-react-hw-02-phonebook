

import React, { Component } from "react";
import './Form.module.css'


export class Form extends Component {
    state = {
        contacts: [],
        name: ''
    }

    reset = () => {
        this.setState({contacts: [], name: '' })
    }

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }


    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state.name)
        this.reset();
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Name
                        <input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </form>

                <h2>Contacts</h2>
                <ul>
                   {this.state.contacts.map((contact) => (<li key={contact.id}>{contact.name}</li>))}
                </ul>
            </div>
        )
    }

};
