import React from 'react';
import { IconContext } from 'react-icons'
import { FaReact } from 'react-icons/fa';
import { MdAlarm } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import CustomToast from './components/CustomToast'

toast.configure()

function App() {
  const notify = () => {
    toast("Default notification!", { position: toast.POSITION.TOP_LEFT })
    toast.success("Success notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 10000
    })
    toast.info("Info notification!", { position: toast.POSITION.TOP_RIGHT })
    toast.warn("Warning notification!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false
    })
    toast.error(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: false
    })
    toast("Wow so easy!", { position: toast.POSITION.BOTTOM_RIGHT })
  }

  return (
    <IconContext.Provider value={{color: 'blue', size: '5rem'}} >
      <div className="App">
        <FaReact />
        <MdAlarm color='red' />
        <button onClick={ notify }>Notify !</button>
      </div>
    </IconContext.Provider>
  );
}

export default App;