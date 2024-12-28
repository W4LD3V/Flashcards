import React, { useState } from 'react';
import AddQuestions from './components/AddQuestions';
import Flashcard from './components/Flashcard';

function App() {
    const [cards, setCards] = useState([]);

    const handleAddQuestions = (newCards) => {
        console.log('New cards added:', newCards); // Debugging
        setCards(newCards);
    };

    return (
        <div>
            <h1>Flashcards App</h1>
            <AddQuestions onAddQuestions={handleAddQuestions} />
            {cards.length > 0 ? (
                <Flashcard cards={cards} />
            ) : (
                <p>Add some questions and answers to get started!</p>
            )}
        </div>
    );
}

export default App;
