import { Mongo } from 'meteor/mongo'

// this will be read every time
// intermediate database
export const Prompts = new Mongo.Collection('prompts');
const count = Prompts.find().count();
if (count == 0) {
  Prompts.insert({
    type: 'A',
    gen: 0,
    text: 'The old, intelligent woman likes to play instruments and games inside her house.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'B',
    gen: 0,
    text: 'It is important for the child to go to the new school and read his books everyday.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'C',
    gen: 0,
    text: 'Strong humans and wild animals cannot live happily together in one house.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'D',
    gen: 0,
    text: 'When the blue, ragged car makes a loud sound the community becomes understandably angry.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'E',
    gen: 0,
    text: 'Many creatures, thoughts, and visions would come to see her at the peak of the night.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'F',
    gen: 0,
    text: 'The organization named her person of the year because of the importance of her central public profile.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'G',
    gen: 0,
    text: 'While she was attempting to regain awareness after the accident, they swarmed the car and would not help.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'H',
    gen: 0,
    text: 'Over the last twenty years, the travel policy had not changed, but change was in the air because of the new executive in charge.',
    taskType: 'TASK1'
  });
  Prompts.insert({
    type: 'I',
    gen: 0,
    text: 'In the unlikely event that she agrees to supervise the event, she will need to be guided and advised on the difficulty and complexity of the task.',
    taskType: 'TASK1'
  });
}
