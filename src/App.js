import React from 'react';
import HeaderBar from './components/HeaderBar';
import Section from './components/Section';
import './App.css';
import contents from './contents';
import me from './images/me.jpg';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <div className="sections container mt-4">
      <div className="section" id="home">
        <div className="mb-2">
          <img src={me} alt="" />
        </div>
        <h1>Andrew Torr</h1>
        <h2>Software Development Instructor</h2>
        <h2>Eleven Fifty Academy</h2>
      </div>
      {Object.keys(contents).map(key =>
        <Section
          id={key}
          title={contents[key].title}
          content={contents[key].text}
          images={contents[key].images}
          links={contents[key].links}
        />
      )}
      </div>
      <div className="section" id="source">
        <a
          href="https://github.com/AndroidDoctorr/instructor-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="sourceLink"
        >
          (The source code for this project)
        </a>
      </div>
    </div>
  );
}

export default App;
