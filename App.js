import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import ImagesPage from './pages/ImagesPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/images" element={<ImagesPage />}/>
        </Routes>
        </Router>      
    </div>
  );
}

export default App;