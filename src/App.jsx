import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const minus = () => {
    console.log("clicked");
    // setCount(count - 1) ? count>=0 : 0;
    if(count>0) setCount(count-1);
    else setCount(0);
  }

  const add = () => {
    console.log("button2 clicked");
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='main'>
      <div className='parent'>
        <h3>React counter</h3>
        <div className="children">
          <button onClick={minus}>-</button>
          <h1>{count}</h1>
          <button onClick={add}>+</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
