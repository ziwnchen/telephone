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
    const instructionSent = round.get('instrText')

    const questionText_prepare_first = 'Press start when you are ready to begin.';
    const questionText_prepare = 'Press start when you are ready for the next sentence.';
    const questionText_read = '5 seconds to remember the sentence.';
    const questionText_wait = 'Pause to remember the sentence.';
    const questionText_response = 'Please type the sentence that you remember. Make sure to write a complete sentence that somebody else would understand when reading it.';
    const questionText_instruction_task23 = "Please write the next sentence of this story.";
    const question_pre_instruction = "Please read the following instruction. When you are ready to continue, press ‘Next’."


    if (stage.name == 'prepare_first') {
      return (<div className="task-stimulus">
        <div className="task-question">
          <h2>{questionText_prepare_first}</h2>
        </div>
      </div>);
    } else if (stage.name == 'prepare') {
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
    } else if (stage.name == 'instruction'){
      return (
        <div className="task-stimulus">
          <h2>{question_pre_instruction}</h2>
          <div className="task-question" style={styles}>
            <div className='prompt_text'>
              <h3>{instructionSent}</h3>
            </div>
        </div>
      </div>);
    }
  }
}
