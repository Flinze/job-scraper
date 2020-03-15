import React from 'react';
import logo from './logo.svg';
import './App.css';

import Jobs from './Jobs';


const mockJobs = [ 
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Apple'},
  {title: 'SWE 1', company: 'Facebook'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
