import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [clicks, update] = React.useState(0);
  
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/subpath">Subpath</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </header>
      <Switch>
        {/*  */}
        <Route path="/subpath" render={() => (
          <h1>Subpath</h1>
        )} />

        {/*  */}
        <Route path="/form" render={({history}) => (
          <form onSubmit={e => {
            e.preventDefault();
            history.push('/success?input=' + e.target[0].value);
          }}>
            <label htmlFor="x">
              Write something
            </label>

            <br />
            <br />

            <input id="x" type="text" />

            <br />
            <br />

            <button>
              Submit
            </button>
          </form>
        )} />
        
        {/*  */}
        <Route render={() => (
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
  
          <button onClick={() => update(clicks + 1)}>
            Clicked: {clicks} times
          </button>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        )} />
      </Switch>
    </div>
  );
}

export default App;
