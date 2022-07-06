import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';


function App() {
  return (
    <div >
    <Header/>
    <MemeGenerator/>
    </div>
  );
}

export default App;
