
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Flashcard({ card, showAnswer, onToggleAnswer, onDifficulty, onPrevious, onNext, currentIndex, totalCards }) {
    return (
        <div className="relative bg-blue-900 rounded-lg border border-blue-700 p-8 min-h-[400px] flex flex-col">
            {/* Question/Answer Content */}
            <div className="flex-1 flex items-center justify-center text-center mb-8 overflow-y-auto">
                <p className="text-2xl text-white px-4">
                    {showAnswer ? card.answer : card.question}
                </p>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded"
                aria-label="Previous card"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded"
                aria-label="Next card"
            >
                <ChevronRight size={24} />
            </button>

            {/* Bottom Buttons */}
            <div className="flex justify-center gap-3">
                {!showAnswer ? (
                    <button
                        onClick={onToggleAnswer}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded"
                    >
                        Show Solution
                    </button>
                ) : (
                    <div className="flex gap-2 flex-wrap justify-center">
                        <button
                            onClick={() => onDifficulty('again')}
                            className="bg-red-600 hover:bg-red-500 text-white px-5 py-3 rounded"
                        >
                            Again
                        </button>
                        <button
                            onClick={() => onDifficulty('hard')}
                            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-3 rounded"
                        >
                            Hard
                        </button>
                        <button
                            onClick={() => onDifficulty('good')}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded"
                        >
                            Good
                        </button>
                        <button
                            onClick={() => onDifficulty('easy')}
                            className="bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded"
                        >
                            Easy
                        </button>
                    </div>
                )}
            </div>

            {/* Card Counter */}
            <div className="text-center mt-4 text-blue-300 text-sm">
                Card {currentIndex + 1} of {totalCards}
            </div>
        </div>
    );
}
