import logo from './logo.svg';
import './App.css';
import User from './components/ex1/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <User name="User 1" initialItems={["Milk", "Eggs", "Bread"]} />
          <User name="User 2" initialItems={["Apples", "Oranges", "Bananas"]} />
          <User name="User 3" initialItems={["Coffee", "Tea"]} />
        </div>
      </header>
    </div>
  );
}

export default App;
