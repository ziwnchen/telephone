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
  _.times(9, (i) => {
    const round = game.addRound();
    const taskType = "TASK1"
    const promptType = String.fromCharCode(i + 65);
    if (genNum == 0){
      promptSent = InitialPrompt[taskType][promptType];
    } else {
      cursor = Prompts.findOne({type: promptType, gen:genNum, linetype:lineType, taskType:taskType});
      promptSent = cursor.text;
    };
    round.set('taskType', taskType)
    round.set('promptType', promptType);
    round.set('promptSent', promptSent);

    round.addStage({
      name: "prepare",
      displayName: "Prepare",
      durationInSeconds: 120
    });
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
      durationInSeconds: 600
    });
  });

  // TASK 2
  _.times(9, (i) => {
    const round = game.addRound();
    const taskType = "TASK2"
    const promptType = String.fromCharCode(i + 65);
    if (genNum == 0){
      promptSent = InitialPrompt[taskType][promptType];
    } else {
      cursor = Prompts.findOne({type: promptType, gen:genNum, linetype:lineType, taskType:taskType});
      promptSent = cursor.text;
    };
    round.set('taskType', taskType)
    round.set('promptType', promptType);
    round.set('promptSent', promptSent);

    round.addStage({
      name: "add",
      displayName: "AddSentence",
      durationInSeconds: 2000,
    });
  });

// TASK 3
  _.times(3, (i) => {
    const round = game.addRound();
    const taskType = "TASK3"
    const promptType = String.fromCharCode(i + 65);
    promptSent = InitialPrompt[taskType][promptType];
    if (genNum>0){
      for (let m = 1; m <= genNum; m++) {
        cursor = Prompts.findOne({type: promptType, gen:m, linetype:lineType, taskType:taskType});
        promptSent +=  " \n" + cursor.text;
      }
    }
    round.set('taskType', taskType)
    round.set('promptType', promptType);
    round.set('promptSent', promptSent);
    round.addStage({
      name: "add",
      displayName: "AddSentence",
      durationInSeconds: 2000,
    });
  });
});
