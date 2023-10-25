import logo from './logo.svg';
import './App.css';
import { DisplayNumber } from './components/ex1/displayNumber';

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

      <body>
        <h2>Exercicio 1:</h2>
        <p>Somar e subtrair:</p>
        <DisplayNumber></DisplayNumber>
      </body>
    </div>
  );
}

export default App;
