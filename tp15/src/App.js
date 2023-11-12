import './App.css';
import SearchForm from './components/search';
import { Database } from './components/database';

function App() {

  const usersData = new Database();

  return (
    <div className="App">
      <SearchForm usersData={usersData}></SearchForm>
    </div>
  );
}

export default App;
