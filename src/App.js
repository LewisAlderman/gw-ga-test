// @ts-check
import logo from './logo.svg';
import './App.css';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Switch, Route, Link, type RouteProps } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
        <AppRoute title="Subpath" path="/subpath" render={() => (
          <h1>Subpath</h1>
        )} />

        {/*  */}
        <AppRoute title="Form" path="/form" render={({history}) => (
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
        <AppRoute title="" render={() => (
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

/** @type {React.FC<RouteProps & {title: string}>} */
const AppRoute = (props) => (
  <>
    <Helmet title={`Test` + (props.title ? (' | ' + props.title) : "")} />
    <Route {...props} />
  </>
)
