import './App.css';
import { DisplayNumber } from './components/ex1/displayNumber';
import { DisplayComments } from './components/ex2/displayComments';
import { DisplayConsumo } from './components/ex3/displayConsumo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Exercicio 1:</h2>
        <p>Somar e subtrair:</p>
        <DisplayNumber></DisplayNumber>

        <h2>Exercicio 2:</h2>
        <DisplayComments></DisplayComments>

        <h2>Exercicio 3:</h2>
        <DisplayConsumo></DisplayConsumo>
      </header>
    </div>
  );
}

export default App;
