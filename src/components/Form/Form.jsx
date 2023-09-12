import React, { Component } from "react";



export class Form extends Component {
    state = {
        name: '',
        tag: '' ,
    }

    reset = () => {
        this.setState({  name: '',
        tag: ''})
    }
    handleChange = event => {
        const { name, value } = event.currentTarget
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        
       this.props.onSubmit(this.state)
       this.reset();
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ім'я <input
                        name='name'
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </label>
                <label>
                    Призвіще
                    <input
                        name='tag'
                        type="text"
                        value={this.state.tag}
                        onChange={this.handleTagChange}
                    />
                </label>
                <button type="submit">Відправити</button>
            </form>


        );
    }
}


