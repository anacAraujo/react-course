import logo from './logo.svg';
import './App.css';
import Relogio from './components/ex1/relogio';
import ShowPosition from './components/ex2/showPosition';

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
      <div>
        <h1>TP 14</h1>
        <h2>Exercício 1:</h2>
        <Relogio></Relogio>

        <h2>Exercício 2:</h2>
        <ShowPosition></ShowPosition>

        <h2>Exercício 3:</h2>

      </div>
    </div>
  );
}

export default App;
