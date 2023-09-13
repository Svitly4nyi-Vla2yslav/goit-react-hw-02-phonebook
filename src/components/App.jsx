import React, { Component } from 'react'
import { Form } from './Form/Form'

import { ColorPicker } from './ColorPicker/ColorPicker';
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
      > <ColorPicker options={[
        { label: 'red', color: '#F44336' },
        { label: 'green', color: '#4CAF50' },
        { label: 'blue', color: '#2196F3' },
        { label: 'grey', color: '#607D8B' },
        { label: 'pink', color: '#E91E63' },
        { label: 'indigo', color: '#3F51B5' },
      ]} />
        <Form onSubmit={this.formSubmitHandler} />
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}
      </div>
    );
  }
};


// export const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]
