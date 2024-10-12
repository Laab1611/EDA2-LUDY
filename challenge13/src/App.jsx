import React, { useState } from 'react';
import MultipleCustomHooks from './components/MultipleCustomHooks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <MultipleCustomHooks />
      </div>
    </>
  );
}

export default App;