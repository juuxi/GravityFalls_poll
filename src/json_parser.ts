export interface Scores {
  'Dipper': number,
  'Stan': number,
  'Mabel': number,
  'Soos': number,
  'Wendy': number, 
  'Bill Cipher': number,
  'Gideon': number,
  'Robbie': number,
  'Pacifica': number,
}

interface Answer {
  text: string;
  scores: Scores;
}

interface Question {
  question: string;
  answers: Answer[];
}

import questionsData from './scores.json';

export const questions: Question[] = questionsData as Question[];
