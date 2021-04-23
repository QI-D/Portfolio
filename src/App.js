import React from 'react';
import Qi from './Images/Qi.JPG';
import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="App">
      <ul class="nav">
      <li><a href="/">Home</a></li>
      <li><a href="https://github.com/QI-D" target="_blank" rel="noreferrer">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/qi-dang-84594311b/" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="/projects.html">Projects</a></li>
      <li><a href="/Qi_Dang_Resume.pdf" target="_blank">Resume</a></li>
    </ul>

      <header className="App-header">
        <img src={Qi} className="App-logo" alt="logo" />

        <h1>Hi, I am Qi Dang </h1>
        <p>I am a {' '}
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Software Developer',
              1500,
              'Full Stack Developer',
              1500,
              'System Engineer',
              1500
            ]}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
