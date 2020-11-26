import PersonList from '../components/PersonList';
import './App.css';

function App() {
  console.log('[App] rendered....')
  return (
    <div className="App">
      <PersonList />
    </div>
  );
}

export default App;
