import React from 'react';
import Qi from './Images/Qi.JPG';
import './App.css';
import Typical from 'react-typical';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <ReactBootStrap.Navbar.Brand id="home" href="/">QD</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto nav-options">
          {/* <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="https://github.com/QI-D" target="_blank" rel="noreferrer">GitHub</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/qi-dang-84594311b/" target="_blank" rel="noreferrer">LinkedIn</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/Qi_Dang_Resume.pdf" target="_blank">Resume</ReactBootStrap.Nav.Link> */}
          {/* <ReactBootStrap.NavDropdown title="More" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="/Qi_Dang_Resume.pdf" target="_blank">Resume</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown> */}
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          {/* <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
            Dank memes
          </ReactBootStrap.Nav.Link> */}
          <ReactBootStrap.Nav.Link href="/projects">Projects</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="https://github.com/QI-D" target="_blank" rel="noreferrer">GitHub</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/qi-dang-84594311b/" target="_blank" rel="noreferrer">LinkedIn</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/Qi_Dang_Resume.pdf" target="_blank">Resume</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>

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
