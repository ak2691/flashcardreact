import Deck from "../deck/Deck";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function DeckTest() {
    const flashcards = [
        {
            question: "What is the capital of France?",
            answer: "Paris is the capital and most populous city of France."
        },
        {
            question: "What is the largest planet in our solar system?",
            answer: "Jupiter is the largest planet in our solar system, with a mass more than twice that of all other planets combined."
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answer: "William Shakespeare wrote 'Romeo and Juliet' in the late 16th century."
        },
        {
            question: "What is the speed of light?",
            answer: "The speed of light in a vacuum is approximately 299,792,458 meters per second (or about 186,282 miles per second)."
        },
        {
            question: "What is photosynthesis?",
            answer: "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to produce oxygen and energy in the form of sugar."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
            <Deck cards={flashcards} />
        </div>
    );
}