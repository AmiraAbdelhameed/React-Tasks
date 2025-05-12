import './App.css'
import React from 'react';
import Counter from './components/Counter/Counter';
import Count from './components/count/Count';
function App() {



  return (
    <>
 
     <Counter />
      <Count count={0} />

    </>
  )
}

export default App
