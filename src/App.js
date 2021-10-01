import logo from './logo.svg';
import './App.css';

import Blog from './Blog';
import React from 'react';

// Blog Component
const posts = [
  {
      id: 1,
      title: 'Hello World',
      content: 'Welcome to learning React!'
  },
  {
      id: 2,
      title: 'Installation',
      content: 'You can install React from npm.'
  }
];

function App() {
  return (
    <React.Fragment>
      <Blog posts={posts} />
    </React.Fragment>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
