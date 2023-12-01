import React from 'react';
import './App.css';
import './css/Student.css'
import Students from'./nguyen_thanh_mai/Students.js'
function App() {
  return (
    <div className="App">
      <div className='top'>
        <h2>List Students</h2>
          <Students/>
      </div>
    </div>
  );
}

export default App;
