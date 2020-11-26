import { Component } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
//import Counter from './Counter';
import HoverCounter from './HoverCounter';
import MemoComp from './MemoComp';

class App extends Component {
  state = {
    data: 0,
    person: {
      name: ''
    }
  }
  changeData = () => {
    this.setState({
      data: 10,
      person: {
        name: 'anil'
      }
    })
  }
  render() {
    return (
      <div className="App">

        {/* <ClickCounter data={10} /> */}
        <br />
        <br />
        {/* <HoverCounter value={20} /> */}
        {/* <Counter /> */}
        <button onClick={this.changeData}>Change Data</button>
        <br />
        <MemoComp value={this.state.data} person={this.state.person} />
      </div>
    );
  }
}

export default App;
