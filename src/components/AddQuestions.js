import React, { useState } from 'react';

function AddQuestions({ onAddQuestions }) {
    const [questions, setQuestions] = useState('');
    const [answers, setAnswers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Correct splitting
        const questionList = questions.split('\n');
        const answerList = answers.split('\n');

        if (questionList.length !== answerList.length) {
            alert('Number of questions and answers must be the same');
            return;
        }

        const newQuestions = questionList.map((question, index) => ({
            question: question.trim(),
            answer: answerList[index]?.trim(),
        }));

        // Send the pairs to the parent component
        onAddQuestions(newQuestions);

        // Clear the inputs
        setQuestions('');
        setAnswers('');
    };

    return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <label>Questions:</label>
            <textarea
              name="questions"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              placeholder="Enter questions separated by new lines"
            ></textarea>
      
            <label>Answers:</label>
            <textarea
              name="answers"
              value={answers}
              onChange={(e) => setAnswers(e.target.value)}
              placeholder="Enter answers separated by new lines"
            ></textarea>
      
            <button type="submit">Add Questions</button>
          </form>
        </div>
      );      
}

export default AddQuestions;
