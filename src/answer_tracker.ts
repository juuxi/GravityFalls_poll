let userAnswers: Record<number, number> = {};

export const saveAnswer = (question_idx: number, answer_idx: number) => {
  const storedScore = localStorage.getItem('userAnswers');
  if(storedScore) {
    userAnswers = JSON.parse(storedScore);
  }
  userAnswers[question_idx] = answer_idx;
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}
