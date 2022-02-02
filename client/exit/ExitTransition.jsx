import React from "react";

import { Centered } from "meteor/empirica:core";

export default class ExitTransition extends React.Component {
  static stepName = "ExitTransition";
  state = { agree_survey: 1};

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { agree_survey } = this.state;

    return (
      <Centered>
        <div className="exit-survey">
          <h1> Survey Instruction </h1>
          <p>
          Congratulations! You have just finished all rounds of tasks!
          </p>
          <p>
          There is an end survey after the task. We would appreciate if you could
          share with us some more information about you and your task experiences.
          Please note that fail to complete the survey, especially the second part, will
          likely influence your rewards.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <p>
                When you are ready to continue, press ‘Next’.
              </p>
            </div>

            <button type="submit">Next</button>
          </form>
        </div>
      </Centered>
    );
  }
}
