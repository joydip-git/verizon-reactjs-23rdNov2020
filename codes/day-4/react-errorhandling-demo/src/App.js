import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  const logError = (errorDetails) => {
    console.log(errorDetails)
  }

  return (
    <div className="App">
      {/* <ErrorBoundary errorHandler={logError}> */}
        <Hero heroName={'Batman'} />
        {/* <ErrorBoundary errorHandler={logError}> */}
        {/* <Hero heroName={'Joker'} errorHandler={logError} /> */}
        <Hero heroName={'Joker'} />
        {/* </ErrorBoundary> */}
      {/* </ErrorBoundary> */}
    </div>
  );
}
/**
 * {
 *   x:10,
 *   children:{}
 * }
 */
export default App;

// class Frag extends Component {
//   render() {
//     return this.props.children;
//   }
// }
