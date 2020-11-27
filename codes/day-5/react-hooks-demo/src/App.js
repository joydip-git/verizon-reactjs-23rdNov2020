import { useState } from 'react';
import './App.css';
import CountComp from './CountComp';
import NameComp from './NameComp';
//import ClickCounter from './ClickCounter';
//import HoverCounter from './HoverCounter';
//import useCounter from './useCounter';
//import Sample from './Sample';

function App() {
  const [appState, setAppState] = useState({ name: '', count: 0 });

  const updateName = (newName) => {
    setAppState(ps => {
      return {
        ...ps,
        name: newName
      }
    })
  }
  const updateCount = () => {
    setAppState(ps => {
      return {
        ...ps,
        count: ps.count + 1
      }
    })
  }
  console.log('[App] rendered')
  return (
    <div className="App">
      {/* <Sample data={100} /> */}
      {/* <ClickCounter data={10} /> */}
      {/* <HoverCounter value={20} /> */}
      <NameComp nameValue={appState.name} updateHandler={updateName} />
      <br />
      <br />
      <CountComp countValue={appState.count} />
      <br />
      <button onClick={updateCount}>Increase Count</button>
    </div>
  );
}

export default App;
