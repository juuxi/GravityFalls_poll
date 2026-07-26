import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>Question 1</h3>
<p>Option 1</p>
<p>Option 2</p>
<p>Option 3</p>
<p>Option 4</p>

<button id='counter' type='button' class='counter'>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
