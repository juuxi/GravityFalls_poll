import './style.css'
import { setupCounter } from './score_counter.ts'
import { parseQuestions } from './markdown_parser.ts'
import questionsRaw from './questions.md?raw';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>Question 1</h3>
<button class='counter'>Option 1</button>
<button class='counter'>Option 2</button>
<button class='counter'>Option 3</button>
<button class='counter'>Option 4</button>

<div class='debug'></div>
`

setupCounter(document.querySelector<HTMLButtonElement>('button')!);
const questions = parseQuestions(questionsRaw);
let app_div = document.querySelector<HTMLDivElement>('#app')!
questions.forEach( question => {
    app_div.innerHTML += `
    <h3>${question.question}</h3>
    `
    question.options.forEach( option => {
        app_div.innerHTML += `
        <button>${option}</button>
        `
    })
})