import React from "react";
import { Centered } from "meteor/empirica:core";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  pageDirect = () => {
    const { player } = this.props;
    const redirect_path = `http://surveys.ovationworldpanel.com/survey/Screened?refid1=${player.id}&pid1=RCECFN94`;
    // console.log(redirect_path);
    window.location.href=redirect_path;
  };

  render() {
    const { player } = this.props;
    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "All games you are eligible for have filled up too fast...";
        break;
      case "gameLobbyTimedOut":
        msg = "There were NOT enough players for the game to start..";
        break;
      // case "playerLobbyTimedOut":
      //   msg = "???";
      //   break;
      case "playerEndedLobbyWait":
        msg =
          "You decided to stop waiting, we are sorry it was too long a wait.";
        break;
      default:
        msg = "Unfortunately the Game was cancelled...";
        break;
    }
    if (player.exitReason === "failedQuestion") {
      msg =
        "Unfortunately you did not meet the conditions required to play the game.";
    }
    return (
      <Centered>
        <div className="score">
          <h1>Sorry!</h1>

          <p>Sorry, you were not able to play today! {msg}</p>
          <strong> Please click on the button to get back to Ovation. </strong>
          <p>
            <button type="button" onClick={this.pageDirect}>
              Confirm
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
