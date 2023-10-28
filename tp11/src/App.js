import './App.css';
import { ContadorA } from './components/ex1/ContadorA.js';
import { ContadorB } from './components/ex1/ContadorB.js';
import { Termometro } from './components/ex2/Termometro.js';
import UsersList from './components/ex3/users_list';
import Database from './components/ex3/database';

function App() {

  const usersData = new Database();

  return (
    <div className="App">
      <header className="App-header">
        <h1>TP11</h1>
        <p>Ana Araújo</p>
      </header>

      <div>
        <h2>Exercicio 1:</h2>
        <p>componentes funcionais</p>
        <ContadorA></ContadorA>
        <p>class components</p>
        <ContadorB></ContadorB>

        <h2>Exercicio 2:</h2>
        <Termometro></Termometro>

        <h2>Exercicio 3:</h2>
        <UsersList usersData={usersData.data}></UsersList>
      </div>
    </div>
  );
}

export default App;
