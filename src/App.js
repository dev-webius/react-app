import logo from './logo.svg';
import './App.css';

import React from 'react';

import Calculator from './Calculator';

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
      <Calculator />
    </React.Fragment>
  );
}

/*
// 첫 번째 입력은 잠겨있지만 잠시 후 입력이 가능해짐
ReactDOM.render(
  <input value="hi" />,
  document.getElementById('test')
);

// null or void 0 (undefined)
setTimeout(() => {
  ReactDOM.render(
    <input value={null} />,
    document.getElementById('test')
  );
}, 1000);
*/

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
