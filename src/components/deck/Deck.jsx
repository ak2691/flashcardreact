import Flashcard from "../flashcard/Flashcard";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Deck({ cards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handlePrevious = () => {
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
    };

    const handleNext = () => {
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
    };

    const handleDifficulty = (difficulty) => {
        console.log(`Card rated as: ${difficulty}`);
        setShowAnswer(false);
        setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
    };

    const handleToggleAnswer = () => {
        setShowAnswer(true);
    };
    return (
        <div className="w-full max-w-2xl">
            <Flashcard
                card={cards[currentIndex]}
                showAnswer={showAnswer}
                onToggleAnswer={handleToggleAnswer}
                onDifficulty={handleDifficulty}
                onPrevious={handlePrevious}
                onNext={handleNext}
                currentIndex={currentIndex}
                totalCards={cards.length}
            />
        </div>
    );
    //contains all cards for specific deck, needs a parent user that contains a list of decks,
    //this is the many to one relationship for user and deck, this should be one to many for deck to flashcards
    //other potential features for social but social is later. Social could just be similar in that
    //we have a social to deck, one to many relationship of some sorts, not sure yet
}