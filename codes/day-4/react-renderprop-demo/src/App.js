import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  /*
  const showClickCounter = (counterData, counterhandler) => {
    return <ClickCounter counterValue={counterData} handler={counterhandler} data={100} />
  }

  const showHoverCounter = (counterData, counterhandler) => {
    return <HoverCounter counter={counterData} counterFn={counterhandler} value={200} />
  }
*/
  return (
    <div className="App">
      <Counter render={
        (counterData, counterhandler) => {
          return <ClickCounter counterValue={counterData} handler={counterhandler} data={100} />;
        }
      } />
      <br />
      <br />
      <Counter render={
        (counterData, counterhandler) => {
          return <HoverCounter counter={counterData} counterFn={counterhandler} value={200} />
        }
      } />
    </div>
  );
}

export default App;


