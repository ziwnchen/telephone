import React from "react";

import { Centered } from "meteor/empirica:core";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    {label}
  </label>
);

export default class ExitSurvey2 extends React.Component {
  static stepName = "ExitSurvey2";
  state = { first_difficulty: "", first_certain: "", first_meaning:"", second_difficulty: "", second_certain: "", feedback: ""};

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
    const { first_difficulty, first_certain, first_meaning, second_difficulty, second_certain, feedback} = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Exit Survey (Part 2) </h1>
          <p>
            Please answer the following questions regarding your task experiences.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <div>
                <label htmlFor="first_difficulty">On the first task, how difficult was it for your to remember the sentences? (1=not at all difficult, 7=very difficult)</label>
                <div>
                  <input
                    id="first_difficulty"
                    type="number"
                    min="1"
                    max="7"
                    step="1"
                    dir="auto"
                    name="first_difficulty"
                    maxlength="10"
                    size="10"
                    value={first_difficulty}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

                <div>
                  <label htmlFor="first_certain">On the first task, how certain were you that the text you wrote was the text that you read in the question prompt? (1=very uncertain, 7=very certain)</label>
                  <div>
                    <input
                      id="first_certain"
                      type="number"
                      min="1"
                      max="7"
                      step="1"
                      dir="auto"
                      name="first_certain"
                      value={first_certain}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="first_meaning">On the first task, how sure are you that you captured the meaning of the text that you read (1=not at all sure, 7=very sure)</label>
                <div>
                  <input
                    id="first_meaning"
                    type="number"
                    min="1"
                    max="7"
                    step="1"
                    dir="auto"
                    name="first_meaning"
                    value={first_meaning}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="second_difficulty">On the second task, when you were adding your line to the stories, how closely were you trying to follow the underlying idea in the story? (1=not that closely, 7=very closely)</label>
                <div>
                  <input
                    id="second_difficulty"
                    type="number"
                    min="1"
                    max="7"
                    step="1"
                    dir="auto"
                    name="second_difficulty"
                    value={second_difficulty}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="first_meaning">On the second task, when you were adding your line to the stories, how much were you trying to create novelty in the story (1=I was not trying to add novelty to the story, 7=I was trying to add as much novelty as possible to the story)</label>
                <div>
                  <input
                    id="second_certain"
                    type="number"
                    min="1"
                    max="7"
                    step="1"
                    dir="auto"
                    name="second_certain"
                    value={second_certain}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="feedback">Please give us your feedback regarding your task experience.</label>
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
