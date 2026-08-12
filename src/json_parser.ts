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

export interface Question {
  question: string;
  answers: Answer[];
}

interface Description {
  character: string;
  description: string;
}

import questionsData from './scores.json';
import descriptionsData from './result_descriptions.json';

export const questions: Question[] = questionsData as Question[];
export const descriptions: Description[] = descriptionsData as Description[];
