import axios from "axios";
import { response } from "express";
import React, { Component } from "react";

export default class RulesCreate extends Component {
  state = {
    name: "",
    explanation: "",
    createdBy: null,
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {name, explanation}= this.state;
    axios.post('/api/rules', {
      name,
      explanation
    })
    .then(response=>{
      this.props.history.push('/');
    })
  };

  changeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="name">Name the ruleset: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <label htmlFor="name">Explanation: </label>
          <input
            type="text"
            name="explanation"
            id="explanation"
            value={this.state.explanation}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}