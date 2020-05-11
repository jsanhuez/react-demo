import React from 'react';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from "react-icons/md";
import './App.css';
import CustomModal from './components/CustomModal';
import ToastNotification from './components/ToastNotification';
import Tooltip from './components/Tooltip';
import CustomCountUp from './components/CustomCountUp';
import IdleTimerContainer from './components/IdleTimerContainer';
import ColorPicker from './components/ColorPicker';
import CreditCard from './components/CreditCard';
import DatePickerComponent from './components/DatePickerComponent';
import PlayerComponent from './components/PlayerComponent';
import LoadingDemo from './components/LoadingDemo';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

const chartCSS = {
  parentContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  childrenContainer: {
    width: '720px'
  }
}

function App() {
  return (
    <div className="App">
      <LoadingDemo />
      <IdleTimerContainer />

      <IconContext.Provider value={{color: 'blue', size: '5rem'}} >
        <FaReact />
        <MdAlarm color='red' />
      </IconContext.Provider>

      <ToastNotification />

      <CustomModal />

      <Tooltip />

      <CustomCountUp />

      <CreditCard />

      <ColorPicker />

      <DatePickerComponent />

      <PlayerComponent />

      <div style={chartCSS.parentContainer}>
        <div style={chartCSS.childrenContainer}>
          <LineChart />
          <BarChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default App;
