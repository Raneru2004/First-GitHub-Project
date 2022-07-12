import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux/es/exports';
import { selectSendMessageIsOpen } from './features/counter/mailSlice'


function App() {
  const sendMessageIsOpen= useSelector(selectSendMessageIsOpen)
  console.log(sendMessageIsOpen)
  return (
    
   
    <div className="App">
      <Header />
      <div className='app__body'>
        <Sidebar/>
          <Router>
            <Routes>
              <Route path="/mail" element={<Mail/>}/>
              <Route path="/" element={<EmailList/>}/>
            </Routes>
          </Router>
      </div>
      {sendMessageIsOpen && < SendMail/>}
    </div>
    
    
  );
}

export default App;
