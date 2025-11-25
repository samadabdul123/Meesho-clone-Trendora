import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import Approuter from './router/Approuter';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
       <Approuter />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
