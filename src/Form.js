
import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    await axios.post(
      'https://hk8srsss21.execute-api.us-east-2.amazonaws.com/default/',
      { key1: `${name}, ${message}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Date:</label>
          <input
            type="date"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Miles:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}