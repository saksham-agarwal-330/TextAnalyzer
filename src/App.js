import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#1b1b26";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextAnalyzer" aboutText="About TextAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TextForm heading="Try Text Analyzer - Word Count, Character Count, Text Manipulation," mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
