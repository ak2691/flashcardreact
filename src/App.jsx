import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Flashcard from './components/flashcard/Flashcard';
import DeckTest from './components/test/DeckTest';
import Home from './components/ui/Home';

function App() {


  return (
    <>
      <Routes>
        <Route path="/flashcard" element={<Flashcard />} />
        <Route path="/decktest" element={<DeckTest />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}

export default App
