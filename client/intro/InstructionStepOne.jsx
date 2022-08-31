import React from "react";

import { Centered } from "meteor/empirica:core";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Centered>
        <div className="instructions">
          <h1> Task Instructions </h1>
          <p>
            There are two different tasks you have to complete: Task 1 and
            Task 2. Both tasks will last for 9 rounds. Along with instruction rounds,
            there are 20 rounds in total.
          </p>
          <p>
            For task 1, you will have five seconds to read a sentence.
            After reading, there will be a 5-second pause after which you will be
            asked to rewrite the sentence to the best of your ability. This is a
            memory task; try to remember correctly, but paraphrase if necessary.
            You will do this nine times.
          </p>
          <p>
            For task 2, you will read nine individual sentences that are
            part of different stories. Your task will be to write the next
            sentence in each of the stories. You may write whatever you want,
            as long as it follows from the previous sentence. You write only one sentence,
            and you try to sustain or increase the coherence and engagement of each independent story.
          </p>
          <p>
            You will be given the instructions seperately at the beginning of each
            task.
          </p>
          <p>
            When you are ready to continue, press ‘Next’.
          </p>
          <p>
            <button type="button" onClick={onNext} disabled={!hasNext}>
              Next
            </button>
          </p>
        </div>
      </Centered>
    );
  }
}
