import React from "react";

import { Centered } from "meteor/empirica:core";

export default class Quiz extends React.Component {
  state = { task_num: "", task_type: "" };

  handleChange = event => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value.trim().toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { player } = this.props;
    if (this.state.task_num !== "2" || this.state.task_type !== "recall") {
      // alert("Incorrect! Read the instructions, and please try again.");
      player.exit("failedQuiz");
    } else {
      this.props.onNext();
    }
  };

  render() {
    const { hasPrev, hasNext, onNext, onPrev } = this.props;
    const { task_num, task_type } = this.state;
    return (
      <Centered>
        <div className="quiz">
          <h1> Pre-task Quiz </h1>
          <form onSubmit={this.handleSubmit}>
            <div class="quiz_question">
              <label htmlFor="task_num">How many tasks are you going to complete?</label>
              <br/>
              <input
                type="text"
                dir="auto"
                id="task_num"
                name="task_num"
                placeholder="e.g. 5"
                value={task_num}
                onChange={this.handleChange}
                autoComplete="off"
                required
              />
          </div>
          <div class="quiz_question">
              <label>
                What are you going to do for the first task?
              </label>
              <br/>
              <input
                type="radio"
                id="recall"
                name="task_type"
                value="recall"
                onChange={this.handleChange}
              />Rewrite each of the sentences provided

              <br/>
              <input
                type="radio"
                id="write"
                name="task_type"
                value="write"
                onChange={this.handleChange}
              />Write the next sentence in the story to the sentence provided
          </div>

          <br/>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </Centered>
    );
  }
}
