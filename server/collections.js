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
  Prompts.insert({
    type: 'A',
    gen: 0,
    text: 'As a matter of fact, not all was well, given that they had both been equally rejected by their group of friends.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'B',
    gen: 0,
    text: 'Because the three of them had stayed up all night to finish the project, they were exhausted during the meeting the next day.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'C',
    gen: 0,
    text: 'On an exceptionally hot evening early in July, a young man came out of the cabin in which he lodged and walked slowly, as though in hesitation, towards the bridge.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'D',
    gen: 0,
    text: 'Given the circumstances, they were not about to give up without a fight.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'E',
    gen: 0,
    text: 'The wind swayed the trees softly as clouds slowly drifted across the horizon.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'F',
    gen: 0,
    text: 'It was her first day away from home, where she had spent the first 27 years of her life.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'G',
    gen: 0,
    text: 'During the last three weeks, the visions had intensified.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'H',
    gen: 0,
    text: 'Now it was dark as the airplane descended into this once great city.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'I',
    gen: 0,
    text: 'The first ten years of marriage had been nothing special.',
    taskType: 'TASK2'
  });
  Prompts.insert({
    type: 'A',
    gen: 0,
    text: 'I went down to the front garden and went through the hole in the fence to get started with my day. The sun was bright and it seemed to be a great day for adventure.',
    taskType: 'TASK3'
  });
  Prompts.insert({
    type: 'B',
    gen: 0,
    text: 'On the first Monday in August a general meeting was called in the main room on the first floor. While I only expected to see colleagues from my department, it seemed everyone from the firm was there.',
    taskType: 'TASK3'
  });
  Prompts.insert({
    type: 'C',
    gen: 0,
    text: "A few feet deeper into the forest, the crime scene unit found two black sneakers, a dark shirt, and a pair of black pants. The clothes' tattered condition suggested that they, like the skull and loose bones, had been removed from the body by scavengers.",
    taskType: 'TASK3'
  });
}
