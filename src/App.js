import React from 'react';
import Qi from './Images/Qi.JPG';
import './App.css';
import Typical from 'react-typical';



function App() {
  return (
    <div className="App">
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
