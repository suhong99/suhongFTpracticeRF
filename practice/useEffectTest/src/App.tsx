import { useState } from 'react';

import './App.css';
import TestComp from './TestComp';
function App() {
  const [count, setCount] = useState(0);
  const [isTestComp, setIsTestComp] = useState(false);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {isTestComp && <TestComp />}
      </div>
      <div
        style={{ color: 'purple', fontSize: '1.5rem', cursor: 'pointer' }}
        onClick={() => {
          setIsTestComp(!isTestComp);
        }}
      >
        {isTestComp ? '사라져라' : '나타나라'}
      </div>
    </>
  );
}

export default App;
