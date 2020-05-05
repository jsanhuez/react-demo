import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from './CustomToast';

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

toast.configure()
function ToastNotification() {
    return (
        <div>
            <button onClick={ notify }>Notify !</button>
        </div>
    )
}

export default ToastNotification