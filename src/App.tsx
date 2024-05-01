import React from 'react';
import logo from './logo.svg';
import './App.css';
import FITable from './components/FITable';
import { tableData } from './data/data'

function App() {
  return (
    <div className="App">
        <p>
          JPM UI CODE ASSESSEMENT
        </p>
      <FITable data={tableData}></FITable>
    </div>
  );
}

export default App;
