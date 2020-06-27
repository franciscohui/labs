import React from 'react';
import Projects from './Projects.js'
import Timer from './Timer.js'
import Weather from './Weather.js'
import './App.css';

function App() {
  return (
    <div>
      <h1>2020 Projects</h1>
      <Weather/>
      <Timer />
      <Projects />
    </div>
  )
}

export default App;

// test dev branching
