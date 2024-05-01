import React from 'react';
import logo from './logo.svg';
import './App.css';
import FITable from './components/FITable';
import { tableData } from './data/data'

function App() {
  return (
    <div className="App">
      <h2>Financial Instruments</h2>
      <FITable data={tableData}></FITable>
    </div>
  );
}

export default App;
