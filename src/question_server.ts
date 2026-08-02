import { questions } from './json_parser.ts'
import type { Scores } from './json_parser.ts';
import { setCounter } from './score_counter.ts';

export function setupQuestionServer() {
  let counter = 0;
  const max_question_num = questions.length - 1;
  let app_div = document.querySelector<HTMLDivElement>('.question_div')!
  let currScores: Scores[] = [];

  let applyScore = (btn: HTMLButtonElement) => {
    const idx: number = +btn.value;
    const scores = currScores[idx];
    setCounter(scores);
  }

  let changeQuestion = (idx: number) => {
    idx = Math.max(0, idx);
    idx = Math.min(idx, max_question_num);
    counter = idx;
    currScores.length = 0;
    const question = questions[idx];
    app_div.innerHTML = `
    <h3>${question.question}</h3>
    `
    question.answers.forEach( (answer, idx) => {
      let answer_btn = document.createElement('button');
      answer_btn.innerText = answer.text;
      answer_btn.value = idx.toString();
      app_div.appendChild(answer_btn);

      currScores.push(answer.scores);
      answer_btn.addEventListener('click', () => applyScore(answer_btn));
    })
  }

  document.querySelector<HTMLButtonElement>('#next_btn')
  ?.addEventListener('click', () => changeQuestion(counter + 1));
  document.querySelector<HTMLButtonElement>('#prev_btn')
  ?.addEventListener('click', () => changeQuestion(counter - 1));
  changeQuestion(0);
}
