import logo from './logo.svg';
import './App.css';
import User from './components/ex1/user';
import Login from './components/ex2/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Exercicion 1:</h1>
          <User name="User 1" initialItems={["Milk", "Eggs", "Bread"]} />
          <User name="User 2" initialItems={["Apples", "Oranges", "Bananas"]} />
          <User name="User 3" initialItems={["Coffee", "Tea"]} />
        </div>
        <div>
          <hr></hr>
          <h1>Exercicio 2:</h1>
          <Login></Login>
        </div>
      </header>
    </div>
  );
}

export default App;
