import { useState, useEffect } from 'react';

const Question = () => {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
      const data = await response.json();
      const fetchedQuestion = data.results[0];

      setCategory(fetchedQuestion.category);
      setQuestion(fetchedQuestion.question);
      setAnswer(fetchedQuestion.correct_answer);
    };

    fetchQuestion();
  }, []);

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <div>
      {category && <div>{category}</div>}
      {question && <h3>{question}</h3>}
      <button type="button" onClick={handleReveal}>Reveal answer</button>
      {revealed && <div>{answer}</div>}
    </div>
  );
};

export default Question;
