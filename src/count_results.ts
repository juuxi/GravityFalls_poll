import type { Scores } from "./json_parser";

function countResult() {
  const savedScores = localStorage.getItem('scores');
  if (savedScores) {
    const scores: Scores = JSON.parse(savedScores);

    let winCharacter: keyof Scores | undefined;
    let maxScore = -Infinity;

    for (const key in scores) {
      const k = key as keyof Scores;
      if (scores[k] > maxScore) {
        maxScore = scores[k];
        winCharacter = k;
      }
    }
    
    document.querySelector<HTMLDivElement>('.debug')!.innerHTML = `
    Твой любимый персонаж - ${winCharacter}
    `
  }
}

countResult();