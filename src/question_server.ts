import { questions } from './json_parser.ts'
import type { Scores, Question } from './json_parser.ts';
import { saveAnswer } from './answer_tracker.ts';

function updateProgressBar(questions: Question[], idx: number) {
  let progressBar = document.querySelector<HTMLDivElement>('.progress-bar')!;
  progressBar.innerHTML = '';
  questions.forEach( (_, question_idx) => {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    if(question_idx < idx) {
      dot.classList.add('active');
    }
    else if(question_idx == idx) {
      dot.classList.add('current');
    }
    progressBar.appendChild(dot);
  });
}

export function setupQuestionServer() {
  let counter = 0;
  const max_question_num = questions.length - 1;
  let app_div = document.querySelector<HTMLDivElement>('.question_div')!
  let currScores: Scores[] = [];

  let changeQuestion = (idx: number) => {
    idx = Math.max(0, idx);
    counter = idx;

    if(counter == 0) {
      const start_page_anchor = document.createElement('a');
      start_page_anchor.href = 'index.html';
      let prev_btn = document.querySelector<HTMLButtonElement>('#prev_btn');
      if(prev_btn?.parentNode) {
        prev_btn.parentNode.insertBefore(start_page_anchor, prev_btn);
        start_page_anchor.appendChild(prev_btn);
      }
    } else {
    const prev_btn = document.querySelector<HTMLButtonElement>('#prev_btn');
    if (prev_btn?.parentElement?.tagName === 'A') {
      const anchor = prev_btn.parentElement;
      anchor.replaceWith(prev_btn);
    }
  }

    currScores.length = 0;
    const question = questions[idx];
    app_div.innerHTML = `
    <h3>${question.question}</h3>
    `
    if (question.answers[0].text.substring(0, 3) == 'img') {
      let answers_div = document.createElement('div');
      answers_div.classList.add('answers-content');
      let image_div = document.createElement('div');
      image_div.classList.add('image-grid');
      if (question.answers.length == 2) {
        image_div.classList.add('images-2');
      }
      if (question.answers.length == 3) {
        image_div.classList.add('images-3');
      }
      if (question.answers.length == 4) {
        image_div.classList.add('images-4');
      }

      question.answers.forEach( (answer, answer_idx) => {
        let answer_btn = document.createElement('button');
        
        let img_src = answer.text.split(' ')[1];
        let text = answer.text.split(' ')[2];
        let answer_img = document.createElement('img');
        answer_img.src = img_src;
        answer_img.classList.add('answer-img');

        text = text.replace(new RegExp('_', 'g'), ' ');
        answer_btn.innerHTML = text;
        answer_btn.appendChild(answer_img);

        answer_btn.value = answer_idx.toString();
        currScores.push(answer.scores);
        answer_btn.addEventListener('click', () => saveAnswer(idx, answer_idx));
        
        if(idx >= max_question_num) {
          const result_page_anchor = document.createElement('a');
          result_page_anchor.href = 'results.html';
          result_page_anchor.appendChild(answer_btn);
          image_div.appendChild(result_page_anchor);
        }
        else {
          answer_btn.addEventListener('click', () => changeQuestion(counter + 1));
          image_div.appendChild(answer_btn);
        }
      })
      answers_div.appendChild(image_div);
      app_div.appendChild(answers_div);
    }
    else {
      question.answers.forEach( (answer, answer_idx) => {
        let answer_btn = document.createElement('button');
        answer_btn.innerText = answer.text;
        answer_btn.value = answer_idx.toString();
        currScores.push(answer.scores);
        answer_btn.addEventListener('click', () => saveAnswer(idx, answer_idx));
        
        if(idx >= max_question_num) {
          const result_page_anchor = document.createElement('a');
          result_page_anchor.href = 'results.html';
          result_page_anchor.appendChild(answer_btn);
          app_div.appendChild(result_page_anchor);
        }
        else {
          answer_btn.addEventListener('click', () => changeQuestion(counter + 1));
          app_div.appendChild(answer_btn);
        }
      })
    }

    updateProgressBar(questions, idx);
  }

  document.querySelector<HTMLButtonElement>('#prev_btn')
  ?.addEventListener('click', () => changeQuestion(counter - 1));
  changeQuestion(0);
}
