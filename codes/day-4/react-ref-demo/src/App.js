import { createRef } from 'react';
import './App.css';
import Child from './Child';

function App() {

  //let appInputElementRef = null;
  // const setElementReference = (elementRef) => {
  //   appInputElementRef = elementRef;
  // }
  const appInputElementRef = createRef()
  const childRef = createRef()

  const focusInput = (event) => {
    // if (appInputElementRef !== null)
    //   appInputElementRef.focus();

    // if(appInputElementRef.value ==='')
    //appInputElementRef.current.focus()
    //console.log(childRef.current)
    //childRef.current.focusChildInput();
    childRef.current.focus()
  }

  return (
    <div className="App">

      App:&nbsp;
      {/* <input type='text' ref={setElementReference} /> */}
      <input type='text' ref={appInputElementRef} />
      <br />
      <button onClick={focusInput}>Put Focus</button>
      <br />
      <br />
      {/* <Child ref={childRef} /> */}
      <Child ref={childRef} x={10} />
    </div>
  );
}

export default App;
//type, ref, key, props
