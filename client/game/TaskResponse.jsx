import React from "react";
import Slider from "meteor/empirica:slider";
export default class TaskResponse extends React.Component {

  handleChange = event => {
    const value = String(event.currentTarget.value);
    const { player } = this.props;
    player.round.set("value", value);
  };

  handleCopy = event => {
    event.preventDefault();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.player.stage.submit();
  };

  renderSubmitted() {
    return (<div className="task-response">
      <div className="response-submitted">
        <h5>Waiting...</h5>
        Please wait for the next question.
      </div>
    </div>);
  }

  renderWait() {
    return (<div className="task-response">
      <div className="response-wait">
      </div>
    </div>);
  }

  renderInput() {
    const {player} = this.props;
    const value = player.round.get("value");
    return (<div>
      <label for="response">Your Response</label>
      <textarea
        id='response'
        name='response'
        rows="10"
        cols="100"
        value={value}
        onChange={this.handleChange}
        onCut={this.handleCopy}
        onCopy={this.handleCopy}
        onPaste={this.handleCopy}
        required></textarea>
    </div>);
  }

  render() {
    const {player, round, stage} = this.props;

    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    if (stage.name == 'prepare') {
      return (<div className="task-response">
        <button onClick={this.handleSubmit}>Start</button>
      </div>);
    } else if (stage.name == 'response') {
      return (<div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput()}
          <button type="submit">Submit</button>
        </form>
      </div>);
    } else if (stage.name == 'add') {
      return (<div className="task-response">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput()}
          <button type="submit">Submit</button>
        </form>
      </div>);
    } else if (stage.name == 'instruction'){
      return (<div className="task-response">
        <button onClick={this.handleSubmit}>Next</button>
      </div>);
    } else {
      return this.renderWait();
    }
  }
}
