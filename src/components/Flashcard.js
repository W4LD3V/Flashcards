import React, { useState } from 'react';

function Flashcard({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const handleNextQuestion = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setCurrentIndex(randomIndex);
        setShowAnswer(false);
    };

    return (
        <div>
            <button onClick={handleNextQuestion}>Next Question</button>
            {currentIndex !== null && (
                <div className="flashcard">
                    <h2>{cards[currentIndex].question}</h2>
                    <button onClick={handleShowAnswer}>
                        {showAnswer ? 'Show Question Only' : 'Show Answer'}
                    </button>
                    {showAnswer && <p>{cards[currentIndex].answer}</p>}
                </div>
            )}
        </div>
    );
}

export default Flashcard;
