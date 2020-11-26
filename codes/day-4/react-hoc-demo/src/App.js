import './App.css';
import ClickCounter from './ClickCounter';
//import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <br />
      <br />
      <HoverCounter />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
