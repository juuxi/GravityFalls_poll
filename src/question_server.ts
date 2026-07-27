import { questions } from './json_parser.ts'

export function setupQuestionServer() {
  let counter = 0;
  let app_div = document.querySelector<HTMLDivElement>('.question_div')!

  let changeQuestion = (idx: number) => {
    counter = idx;
    const question = questions[idx];
    app_div.innerHTML = `
    <h3>${question.question}</h3>
    `
    question.answers.forEach( (answer, idx) => {
      let answer_btn = document.createElement('button');
      answer_btn.innerText = answer.text;
      answer_btn.value = idx.toString();
      app_div.appendChild(answer_btn);
    })
  }

  document.querySelector<HTMLButtonElement>('#next_btn')
  ?.addEventListener('click', () => changeQuestion(counter + 1));
  document.querySelector<HTMLButtonElement>('#prev_btn')
  ?.addEventListener('click', () => changeQuestion(counter - 1));
  changeQuestion(0);
}
