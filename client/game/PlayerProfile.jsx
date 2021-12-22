import React from "react";
import Timer from "./Timer.jsx";

export default class PlayerProfile extends React.Component {
  renderProfile() {
    const {player} = this.props;
    return (<div className="profile-score">
      <h3>Your Profile</h3>
      <img src={player.get("avatar")} className="profile-avatar"/>
    </div>);
  }

  // renderProgress() {
  //   const {round} = this.props;
  //   return (<div className="profile-progress">
  //     <h3>Your Progress</h3>
  //     <strong>{round._index}</strong>.
  //   </div>);
  // }

  render() {
    const {stage} = this.props;
    if (stage.name=='read' || stage.name=='wait'){
      return (<aside className="player-profile">
        {this.renderProfile()}
        <Timer stage={stage}/>
      </aside>);
    } else{
      return (<aside className="player-profile">
        {this.renderProfile()}
      </aside>);
    }
  }
}
