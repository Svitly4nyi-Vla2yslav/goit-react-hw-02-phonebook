import React, { Component } from 'react'
import { Form } from './Form/Form'

export class App extends Component {
  state = {
  
  }

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value })
  }

  handleTagChange = event => {
    this.setState({ tag: event.currentTarget.value })
  }
formSubmitHandler = data => {
console.log(data)
}
 
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
       <Form onSubmit={this.formSubmitHandler}/>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}
      </div>
    );
  }
};
