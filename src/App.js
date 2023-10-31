import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Setup from './pages/Setup';
import Questions from './pages/Questions';
import Stats from './pages/Stats';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Setup />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
