import axios from "axios";
import React, { Component } from "react";

export default class RulesCreate extends Component {
  state = {
    message: "",
    name: "",
    explanation: "",
    createdBy: null,
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, explanation } = this.state;
    axios
      .post("/api/rules", {
        name,
        explanation,
      })
      .then((response) => {
        if (response.message) {
          this.setState({
            message: response.message,
          });
        } else {
          this.props.history.push("/");
        }
      });
  };

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="RulesPages">
        <div className="RulesPageContainer">
          <form
            className="BlackShadow FormFormat"
            onSubmit={this.submitHandler}
          >
            <label htmlFor="name">Name the ruleset: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
            <label htmlFor="name">Explanation: </label>
            <textarea
              colums="100"
              rows="25"
              type="text"
              name="explanation"
              id="explanation"
              value={this.state.explanation}
              onChange={this.changeHandler}
            />
            <button type="submit">CREATE RULES</button>
            {this.state.message && <p>{this.state.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}
