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
          <h1> Concluding Survey </h1>
          <p>
          Congratulations! You have now finished all the tasks in this study!
          </p>
          <p>
          We now need to collect some information about you and your experience with this study.
          This survey is a required part of the study and needs to be completed to receive your remuneration.
          We would appreciate if you could share with us some more information about you and your task experiences.
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
