import type { Scores } from "./json_parser";

let curr_scores: Scores = {
    'Dipper': 0,
    'Stan': 0,
    'Mabel': 0,
    'Soos': 0,
    'Wendy': 0, 
    'Bill Cipher': 0,
    'Gideon': 0,
    'Robbie': 0,
    'Pacifica': 0,
  };

  
const SCORE_KEYS: (keyof Scores)[] = [
  'Dipper', 'Stan', 'Mabel', 'Soos', 'Wendy', 'Bill Cipher', 'Gideon', 'Robbie', 'Pacifica'
];

function addScores(a: Scores, b: Scores): Scores {
  const result = {} as Scores;
  for (const key of SCORE_KEYS) {
    result[key] = a[key] + b[key];
  }
  return result;
}


export const setCounter = (add_scores: Scores) => {
  curr_scores = addScores(curr_scores, add_scores);
  localStorage.setItem('scores', JSON.stringify(curr_scores));

  document.querySelector<HTMLDivElement>('.debug')!.innerHTML = `
  <p>Dipper = ${curr_scores['Dipper']}<p>
  <p>Stan = ${curr_scores['Stan']}<p>
  <p>Mabel = ${curr_scores['Mabel']}<p>
  <p>Soos = ${curr_scores['Soos']}<p>
  <p>Wendy = ${curr_scores['Wendy']}<p>
  <p>Bill Cipher = ${curr_scores['Bill Cipher']}<p>
  <p>Gideon = ${curr_scores['Gideon']}<p>
  <p>Robbie = ${curr_scores['Robbie']}<p>
  <p>Pacifica = ${curr_scores['Pacifica']}<p>
  `
}
