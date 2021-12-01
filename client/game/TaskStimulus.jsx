import React from "react";

export default class TaskStimulus extends React.Component {
  render() {
    const {round, stage, player} = this.props;
    const styles = {
      border: '3px solid rgba(0, 0, 0, 0.05)',
      background:'#D3D3D3'
    };

    const taskType = round.get("taskType")
    const promptSent = round.get('promptSent');

    // task1
    const questionText_prepare = 'Press start when you are ready.';
    const questionText_read = '5 seconds to remember the sentence.';
    const questionText_wait = '5 seconds with a blank screen.';
    const questionText_response = 'Please type the sentence that you remember.';
    const questionText_instruction_task23 = "Please write the next sentence of this story.";


    if (stage.name == 'prepare') {
      return (<div className="task-stimulus">
        <div className="task-question">
          <h2>{questionText_prepare}</h2>
        </div>
      </div>);
    } else if (stage.name == 'read') {
      return (
        <div className="task-stimulus">
          <h2>{questionText_read}</h2>
          <div className="task-question" style={styles}>
            <div className='prompt_text'>
              <h3>{promptSent}</h3>
            </div>
        </div>
      </div>);
    } else if (stage.name == 'wait') {
      return (<div className="task-stimulus">
        <div className="task-question">
          <h2>{questionText_wait}</h2>
        </div>
      </div>);
    } else if (stage.name == 'response'){
      return (<div className="task-stimulus">
        <div className="task-question">
          <h2>{questionText_response}</h2>
        </div>
      </div>);
    } else if (stage.name == 'add'){
      let promptSent_break = promptSent.split ('\n').map ((item, i) => <p key={i}>{item}</p>);
      return (
        <div className="task-stimulus">
          <h2>{questionText_instruction_task23}</h2>
          <div className="task-question" style={styles}>
            <div className='prompt_text'>
              <h3>{promptSent_break}</h3>
            </div>
        </div>
      </div>);
    }
  }
}
