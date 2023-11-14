import './App.css';
import SearchLocal from './components/searchLocal';
import { Database } from './components/database';
import SearchAPI from './components/searchAPI';

function App() {

  const usersData = new Database();

  return (
    <div className="App">
      <SearchLocal usersData={usersData}></SearchLocal>
      <SearchAPI></SearchAPI>
    </div>
  );
}

export default App;
