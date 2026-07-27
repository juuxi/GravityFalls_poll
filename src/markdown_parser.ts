interface Question {
  question: string;
  options: string[];
}

export function parseQuestions(mdText: string): Question[] {
  const questions: Question[] = [];
  const blocks = mdText.split(/^# /m).filter((block) => block.trim());

  blocks.forEach((block) => {
    const lines = block.split('\n');
    const questionText = lines[0].trim();
    const options: string[] = [];

    lines.slice(1).forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ')) {
        options.push(trimmed.substring(2));
      }
    });

    if (questionText && options.length > 0) {
      questions.push({ question: questionText, options });
    }
  });

  return questions;
}