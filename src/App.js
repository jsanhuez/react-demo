import React from 'react';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from "react-icons/md";
import './App.css';
import CustomModal from './components/CustomModal';
import ToastNotification from './components/ToastNotification';
import Tooltip from './components/Tooltip';
import CustomCountUp from './components/CustomCountUp';

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{color: 'blue', size: '5rem'}} >
        <FaReact />
        <MdAlarm color='red' />
      </IconContext.Provider>

      <ToastNotification />

      <CustomModal />

      <Tooltip />

      <CustomCountUp />
    </div>
  );
}

export default App;