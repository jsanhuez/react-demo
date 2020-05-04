import React from 'react';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from "react-icons/md";
import './App.css';

function App() {
  return (
    <IconContext.Provider value={{color: 'blue', size: '5rem'}} >
      <div className="App">
        <FaReact />
        <MdAlarm color='red' />
      </div>
    </IconContext.Provider>
  );
}

export default App;