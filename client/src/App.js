import React from 'react';
import './App.css';
import ManaClicker from './components/ManaClicker';
import LoginPage from './components/Login';
import DisplayRules from './components/Rules';
//used for routers to different pages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUpPage from './components/SignUp';
import NewGame from './components/NewGame';
import Leaderboard from './components/Leaderboard';
import Modal from './components/Modal';
function App() {
  
  return (
    <Router>
      <div className="App">
        <nav>
          <a onClick={() => NewGame} href='/newgame'>New Game</a>
          <a href='/rules'>Rules</a>
          <a href="/">Game</a>
          <h1>Mana Master</h1>
          <a href="/login">Login</a> 
          <a href='/signuppage'>Sign Up</a>
          <a href="/leaderboard">Leaderboard</a>
          
        </nav>

        <Routes>
          <Route path="/" element={<ManaClicker/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signuppage" element={<SignUpPage/>}></Route>
          <Route path="/rules" element={<DisplayRules/>}></Route>
          <Route path="/newgame" element={<NewGame/>}></Route>
          <Route path="/leaderboard" element={<Leaderboard/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}


export default App;
