import React from 'react';
import './App.css';
import Records from './components/Records';
import Receipts from './components/Receipts';
import { useState } from 'react';


function App() {
  const [receipts, setReceipts] = useState(Receipts)



  return (
    <div className="App">
      <Records />
    </div>
  );
}

export default App;
