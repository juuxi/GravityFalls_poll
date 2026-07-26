import './style.css'
import { setupCounter } from './score_counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>Question 1</h3>
<button class='counter'>Option 1</button>
<button class='counter'>Option 2</button>
<button class='counter'>Option 3</button>
<button class='counter'>Option 4</button>

<div class='debug'></div>
`

setupCounter(document.querySelector<HTMLButtonElement>('button')!)