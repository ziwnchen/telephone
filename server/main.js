import Empirica from "meteor/empirica:core";
import "./bots.js";
import "./callbacks.js";
import { Prompts } from "./collections.js";
import { InitialPrompt } from "./constant.js";


Empirica.gameInit((game) => {

  game.players.forEach((player, i) => {
    player.set("avatar", `/avatars/jdenticon/${player._id}`);
  });

  const lineType = game.treatment.lineNum;
  const genNum = game.treatment.genNum-1;
  let promptSent = " ";
  let cursor;

  // TASK 1
  // instruction
  _.times(1, (i) => {
    const round = game.addRound();
    const instrText = "For task 1, you will have five seconds to read a sentence. After reading, there will be a 5-second pause after which you will be asked to rewrite the sentence to the best of your ability. This is a memory task; try to remember correctly, but paraphrase if necessary. You will do this nine times.";
    round.set('instrText', instrText);
    round.set('taskType', 'TASK1');
    round.set('promptSent', " ");
    round.addStage({
      name: "instruction",
      displayName: "Instruction",
      durationInSeconds: 100000
    });
  });

  // game
  _.times(9, (i) => {
    const round = game.addRound();
    const taskType = "TASK1"
    const promptType = String.fromCharCode(i + 65);
    if (genNum == 0){
      promptSent = InitialPrompt[taskType][promptType];
    } else {
      cursor = Prompts.findOne({type: promptType, gen:genNum, linetype:lineType, taskType:taskType}, {sort: {Submit_time: -1}});
      promptSent = cursor.text;
    };
    round.set('taskType', taskType)
    round.set('promptType', promptType);
    round.set('promptSent', promptSent);
    round.set('instrText', " ");

    if (i==0){
      round.addStage({
        name: "prepare_first",
        displayName: "Prepare",
        durationInSeconds: 100000
      });
    } else if(i>0){
      round.addStage({
        name: "prepare",
        displayName: "Prepare",
        durationInSeconds: 100000
      });
    }
    round.addStage({
      name: "read",
      displayName: "Read",
      durationInSeconds: 6
    });
    round.addStage({
      name: "wait",
      displayName: "Wait",
      durationInSeconds: 6
    });
    round.addStage({
      name: "response",
      displayName: "Response",
      durationInSeconds: 100000
    });
  });

  // TASK 2
  // instruction
  _.times(1, (i) => {
    const round = game.addRound();
    const instrText = "For task 2, you will read nine individual sentences that are part of different stories. Your task will be to write the next sentence in each of the stories. You may write whatever you want, as long as it follows from the previous sentence. You write only one sentence, and you try to sustain or increase the coherence and engagement of each independent story. ";
    round.set('instrText', instrText);
    round.set('taskType', 'TASK2');
    round.set('promptSent', " ");
    round.addStage({
      name: "instruction",
      displayName: "Instruction",
      durationInSeconds: 100000
    });
  });

  _.times(9, (i) => {
    const round = game.addRound();
    const taskType = "TASK2"
    const promptType = String.fromCharCode(i + 65);
    if (genNum == 0){
      promptSent = InitialPrompt[taskType][promptType];
    } else {
      cursor = Prompts.findOne({type: promptType, gen:genNum, linetype:lineType, taskType:taskType}, {sort: {Submit_time: -1}});
      promptSent = cursor.text;
    };
    round.set('taskType', taskType)
    round.set('promptType', promptType);
    round.set('promptSent', promptSent);

    round.addStage({
      name: "add",
      displayName: "AddSentence",
      durationInSeconds: 100000,
    });
  });



// TASK 3
  // _.times(3, (i) => {
  //   const round = game.addRound();
  //   const taskType = "TASK3"
  //   const promptType = String.fromCharCode(i + 65);
  //   promptSent = InitialPrompt[taskType][promptType];
  //   if (genNum>0){
  //     for (let m = 1; m <= genNum; m++) {
  //       cursor = Prompts.findOne({type: promptType, gen:m, linetype:lineType, taskType:taskType});
  //       promptSent +=  " \n" + cursor.text;
  //     }
  //   }
  //   round.set('taskType', taskType)
  //   round.set('promptType', promptType);
  //   round.set('promptSent', promptSent);
  //   round.addStage({
  //     name: "add",
  //     displayName: "AddSentence",
  //     durationInSeconds: 2000,
  //   });
  // });
});
