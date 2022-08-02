import React from 'react';
import './App.css';
import ManaClicker from './ManaClicker';
import LoginPage from './Login';
//used for routers to different pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <a href="/">Game</a>
          <h1>Mana Master</h1>
          <a href="/login">Login</a> 
          
        </nav>

        <Routes>
          <Route path="/" element={<ManaClicker/>}></Route>
          <Route path="/login" element={<LoginPage/>}>
          </Route>
        </Routes>

      </div>
    </Router>
  );
}


export default App;
