import React from "react";
import { Centered } from "meteor/empirica:core";
import Likert from 'react-likert-scale';

export default class ExitSurvey2 extends React.Component {
  static stepName = "ExitSurvey2";
  state = { first_difficulty: 0, first_certain: "", first_meaning:"", second_close: "", second_novelty: "", feedback: ""};

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { first_difficulty, first_certain, first_meaning, second_close, second_novelty, feedback} = this.state;

    const likertOptions_first_difficult = {
      question: "On the first task, how difficult was it for your to remember the sentences?",
      responses: [
        { value: 1, text: "Very Easy" },
        { value: 2, text: "Easy" },
        { value: 3, text: "Somewhat Easy"},
        { value: 4, text: "Neither Easy nor Difficult" },
        { value: 5, text: "Somewhat Difficult" },
        { value: 6, text: "Difficult" },
        { value: 7, text: "Very Difficult" }
      ],
      onChange: val=>{
        this.setState({first_difficulty: val.value });
      }
  };

      const likertOptions_first_certain = {
        question: "On the first task, how certain were you that the text you wrote was the text that you read in the question prompt?",
        responses: [
          { value: 1, text: "Very Certain" },
          { value: 2, text: "Certain" },
          { value: 3, text: "Somewhat Certain"},
          { value: 4, text: "Neither Certain nor Uncertain" },
          { value: 5, text: "Somewhat Uncertain" },
          { value: 6, text: "Uncertain" },
          { value: 7, text: "Very Uncertain" }
        ],
        onChange: val=>{
          this.setState({first_certain: val.value });
        }
    };

    const likertOptions_first_meaning = {
      question: "On the first task, how sure are you that your written text captured the meaning of the text that you read?",
      responses: [
        { value: 1, text: "Very Sure" },
        { value: 2, text: "Sure" },
        { value: 3, text: "Somewhat Sure"},
        { value: 4, text: "Neither Sure nor Unsure" },
        { value: 5, text: "Somewhat Unsure" },
        { value: 6, text: "Unsure" },
        { value: 7, text: "Very Unsure" }
      ],
      onChange: val=>{
        this.setState({first_meaning: val.value });
      }
  };

  const likertOptions_second_close = {
    question: "On the second task, when you were adding your line to the stories, were you trying to follow the underlying idea in the story?",
    responses: [
      { value: 1, text: "Strongly Disagree" },
      { value: 2, text: "Disagree" },
      { value: 3, text: "Somewhat Disagree"},
      { value: 4, text: "Neither Agree nor Disagree" },
      { value: 5, text: "Somewhat Agree" },
      { value: 6, text: "Agree" },
      { value: 7, text: "Strongly Agree" }
    ],
    onChange: val=>{
      this.setState({second_close: val.value });
    }
};

const likertOptions_second_novelty = {
  question: "On the second task, when you were adding your line to the stories, were you trying to create novelty in the story?",
  responses: [
    { value: 1, text: "Strongly Disagree" },
    { value: 2, text: "Disagree" },
    { value: 3, text: "Somewhat Disagree"},
    { value: 4, text: "Neither Agree nor Disagree" },
    { value: 5, text: "Somewhat Agree" },
    { value: 6, text: "Agree" },
    { value: 7, text: "Strongly Agree" }
  ],
  onChange: val=>{
    this.setState({second_novelty: val.value });
  }
};

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Exit Survey (Part 2) </h1>
          <p>
            Please answer the following questions regarding your task experiences.
          </p>
          <form onSubmit={this.handleSubmit}>

            <Likert {...likertOptions_first_difficult}
              name="first_difficulty"/>
            <Likert {...likertOptions_first_certain}
              name="first_certain"/>
            <Likert {...likertOptions_first_meaning}
              name="first_meaning"/>
            <Likert {...likertOptions_second_close}
              name="second_close"/>
            <Likert {...likertOptions_second_novelty}
              name="second_novelty"/>

              <div>
                <p>Are there any thoughts about the study that you would like to share with us?</p>
                <div>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="10"
                    cols="100"
                    value={feedback}
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>

            <button type="submit">Submit</button>
          </form>
          </div>
      </Centered>
    );
  }
}
