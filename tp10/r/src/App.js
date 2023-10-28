import logo from './logo.svg';
import './App.css';
import { Button1, Button2, Button3 } from './components/Buttons.js';
import { Ola } from './components/Ola.js';
import { UserInput } from './components/input';

function App() {
  let nome = "Cris";
  return (
    <div className="App">
      <header className="App-header">
        <Ola></Ola>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá {nome}!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button1></Button1>
        <Button2></Button2>
        <Button3></Button3>
        <UserInput></UserInput>
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

export default App;
