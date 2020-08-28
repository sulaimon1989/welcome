import React, { Component } from "react";
//import our service
import JeopardyService from "../jeopardyService";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      formData: {
        answer: "",
      },
      data: {},
      score: 0,
    };
  }
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData: { answer: event.target.value } });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let score = this.state.score;
    if (this.state.data.answer === this.state.formData.answer) {
      this.setState({
        score: (score += this.state.data.value),
      });
    } else {
      this.setState({
        score: (score -= this.state.data.value),
      });
    }
    this.getNewQuestion();
  };
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category = "loading";

    if (this.state.data.category && this.state.data.category.title) {
      category = this.state.data.category.title;
    }

    return (
      <div>
        <strong>Question: </strong> {this.state.data.question} <br />
        <strong>Value: </strong> {this.state.data.value} <br />
        <strong>Category: </strong> {category} <br />
        <strong>User Score: </strong> {this.state.score}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Jeopardy;
