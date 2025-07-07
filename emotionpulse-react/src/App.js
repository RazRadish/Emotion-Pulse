import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Analyze from './components/Analyze';
import About from './components/About';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>EmotionPulse</h1>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/analyze">Analyze</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/todo">Todo List</Link> 
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<TodoList />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
