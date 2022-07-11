import React from 'react';
import './App.css';
import Receipts from './components/Receipts';
import Records from './Records';


function App() {

  // const togglePay = event => set

  return (
    <div className="App">
      <Receipts Records = {Records}/>
    </div>
  );
}

export default App;
