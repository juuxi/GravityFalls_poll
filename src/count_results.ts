import type { Scores } from "./json_parser";
import { questions, descriptions } from './json_parser.ts'


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


function countResult() {
  const savedAnswers = localStorage.getItem('userAnswers');
  if (savedAnswers) {
    const answers: Record<number, number> = JSON.parse(savedAnswers);

    let scores: Scores = {
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

    for (const [question_idx_str, answer_idx] of Object.entries(answers)) {
      const question_idx = Number(question_idx_str);
      let question = questions[question_idx];
      let answer = question.answers[answer_idx];

      scores = addScores(scores, answer.scores);
    }

    let winCharacter: keyof Scores | undefined;
    let maxScore = -Infinity;

    for (const key in scores) {
      const k = key as keyof Scores;
      if (scores[k] > maxScore) {
        maxScore = scores[k];
        winCharacter = k;
      }
    }
    
    let image_file: string = 'results/';
    if (winCharacter == 'Bill Cipher') {
      image_file += 'bill_cipher.png';
    }
    else {
      image_file += winCharacter?.toLowerCase() + '.png';
    }

    let img = document.createElement('img');
    img.src = image_file;
    img.height = 210;
    document.querySelector<HTMLDivElement>('.photo-placeholder')?.appendChild(img);
    
    
    let description: string = 'Invalid character name';
    for (let description_obj of descriptions) {
      if(description_obj.character == winCharacter) {
        description = description_obj.description;
      }
    }

    document.querySelector<HTMLDivElement>('.description')!.innerHTML = `
    ${description}
    `
  }
}

function setupRestart() {
  let restart_div = document.querySelector<HTMLDivElement>('.restart');
  const start_page_anchor = document.createElement('a');
  start_page_anchor.href = 'index.html';
  if(restart_div?.parentNode) {
    restart_div.parentNode.insertBefore(start_page_anchor, restart_div);
    start_page_anchor.appendChild(restart_div);
  }
}

countResult();
setupRestart();