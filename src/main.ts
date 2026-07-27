import './style.css'
import { setupCounter } from './score_counter.ts'
import { setupQuestionServer } from './question_server.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class='question_div'>
  <h3>Question 1</h3>
  <button class='counter'>Option 1</button>
  <button class='counter'>Option 2</button>
  <button class='counter'>Option 3</button>
  <button class='counter'>Option 4</button>
</div>

<button id='next_btn'>Next</button>
<button id='prev_btn'>Prev</button>

<div class='debug'></div>
`

setupCounter(document.querySelector<HTMLButtonElement>('button')!);
setupQuestionServer();