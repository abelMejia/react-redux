// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const id = event.target.id;
    this.setState({ [id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { text } = this.state;

    const id = uuidv1();
    this.props.addArticle({ title, id , text});
    this.setState({ title: "", text: "" });
  }
  render() {
    const { title } = this.state;
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="text">Comments</label>
          <textarea id="text" value={text} onChange={this.handleChange} className="form-control"/>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;