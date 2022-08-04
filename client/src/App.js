import React from 'react';
import './App.css';
import ManaClicker from './ManaClicker';
import LoginPage from './Login';
import DisplayRules from './Rules';
//used for routers to different pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUpPage from './SignUp';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <a href='/rules'>Rules</a>
          <a href="/">Game</a>
          <h1>Mana Master</h1>
          <a href="/login">Login</a> 
          <a href='/signuppage'>Sign Up</a>
          
        </nav>

        <Routes>
          <Route path="/" element={<ManaClicker/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signuppage" element={<SignUpPage/>}></Route>
          <Route path="/rules" element={<DisplayRules/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}


export default App;
