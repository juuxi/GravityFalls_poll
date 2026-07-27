import { parseQuestions } from './markdown_parser.ts'
import questionsRaw from './questions.md?raw';


const questions = parseQuestions(questionsRaw);

export function setupQuestionServer() {
  let counter = 0;
  let app_div = document.querySelector<HTMLDivElement>('.question_div')!

  let changeQuestion = (idx: number) => {
    counter = idx;
    const question = questions[idx];
    app_div.innerHTML = `
    <h3>${question.question}</h3>
    `
    question.options.forEach( option => {
      app_div.innerHTML += `
      <button>${option}</button>
      `
    })
  }

  document.querySelector<HTMLButtonElement>('#next_btn')
  ?.addEventListener('click', () => changeQuestion(counter + 1));
  document.querySelector<HTMLButtonElement>('#prev_btn')
  ?.addEventListener('click', () => changeQuestion(counter - 1));
  changeQuestion(0);
}
