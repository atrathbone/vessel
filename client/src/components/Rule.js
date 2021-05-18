import axios from "axios";
import React, { Component } from "react";

export default class Rule extends Component {
  state = {
    rule: null,
  };

  getRule = () => {
    axios
      .get(`/api/rules/rule/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          rule: response.data,
        });
        console.log("this is the state", this.state.rule);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getRule();
    console.log(this.props.user);
  }
  render() {
    let canEdit = <></>;
    let isLoaded = <></>;
    if (this.state.rule) {
      isLoaded = (
        <>
          <h1>{this.state.rule.name}</h1>
          <h3>{this.state.rule.explanation}</h3>
          <p>created by : {this.state.rule.createdBy.username}</p>
        </>
      );
      if (this.props.user._id === this.state.rule.createdBy._id) {
        canEdit = (
          <>
            <button>EDIT</button>
          </>
        );
      }
    }
    
    return (
      <div>
        {isLoaded}
        {canEdit}
      </div>
    );
  }
}