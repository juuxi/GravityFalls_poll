import { getScores } from "./score_counter";

function countResult() {
  const scores = getScores();

  document.querySelector<HTMLDivElement>('.debug')!.innerHTML = `
  <p>Dipper = ${scores['Dipper']}<p>
  <p>Stan = ${scores['Stan']}<p>
  <p>Mabel = ${scores['Mabel']}<p>
  <p>Soos = ${scores['Soos']}<p>
  <p>Wendy = ${scores['Wendy']}<p>
  <p>Bill Cipher = ${scores['Bill Cipher']}<p>
  <p>Gideon = ${scores['Gideon']}<p>
  <p>Robbie = ${scores['Robbie']}<p>
  <p>Pacifica = ${scores['Pacifica']}<p>
  `
}

countResult();