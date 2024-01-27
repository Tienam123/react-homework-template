/* Default imports */

// Code...
export const QuizItem = ({ item: { topic, level, time, questions } }) => {
  return (
    <>
      <h2>{topic}</h2>
      <p>Level: {level}</p>
      <p>Time: {time} min</p>
      <p>Questions: {questions}</p>
    </>
  );
};

