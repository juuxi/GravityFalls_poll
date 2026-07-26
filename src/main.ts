import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>Question 1</h3>
<button>Option 1</button>
<button>Option 2</button>
<button>Option 3</button>
<button>Option 4</button>

<button id='counter' type='button' class='counter'></button>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
