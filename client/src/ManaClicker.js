import './App.css';
import { useState, useEffect } from 'react';
import Orb from './Untitled.png';
import GameButton from "./gameButton.png";
import GreenSplash from "./GreenSplash.png"

function ManaCounter(props) {
  // displays the counter
  let Mana = props.mana
  let formattedMana = Math.round(Mana.toLocaleString('en-US'));
  return <div className='manacounter'>
      <h2>{formattedMana} Mana</h2>
    </div>
}

function ManaClicker(props) {
  const [currentClickPower, setClickPower] = useState(1)
  const [currentClickUpgradeCost, setClickUpgradeCost] = useState(25)
  const [currentMinerUpgradeCost, setMinerUpgradeCost] = useState(25)
  const [currentMana, setMana] = useState(0)
  const [currentAutoClick, setAutoClick] = useState(0)
  const [isAutoClicking, setIsAutoClicking] = useState(false)
  const [isActive, setIsActive] = useState(false)
  // autoclicking upgrade 
  useEffect(() => {
    if (isAutoClicking) {
      setInterval(() => {
        setMana((currentMana) => currentMana + currentAutoClick)}, 1000);
      console.log('autoclicked')
      
    }
  }, [isAutoClicking, currentAutoClick])

  let displaySplash = () => {
    setIsActive(true)
    setTimeout(() =>
      setIsActive(false), 250)
  }

  // states whether is auto clicking is false or true
  let updateIsAutoClicking = () => {
    if (!isAutoClicking && currentMana >= 25) {
      setIsAutoClicking(true)
    }
  }
  // adds to total mana (used in clicking)
  let handleManaUpdate = () => {
    setMana(prevCurrentMana => prevCurrentMana + currentClickPower)
  }
  // upgrade for clicking
  const UpgradeClickPower = (newPower, upgradeCost) => {
    if (currentMana < currentClickUpgradeCost) {
      alert('Not Enough Mana!!')
    } else {
      setMana(currentMana - currentClickUpgradeCost)
      setClickPower(newPower)
      setClickUpgradeCost(upgradeCost)
    }
  }
  const UpgradeMinerPower = (newPower, upgradeCost) => {
    if (currentMana < currentMinerUpgradeCost) {
      alert('Not Enough Mana!!')
    } else {
      setMana(currentMana - currentMinerUpgradeCost)
      setAutoClick(newPower)
      setMinerUpgradeCost(upgradeCost)
    }
  }
  // used to change number to add comma on thousandths 
  let formattedUpgradeCost = currentClickUpgradeCost.toLocaleString('en-US');

  return <div className='home'>
      <ManaCounter mana={currentMana} />
    <div className='Upgrades'>
      <button onClick={() => { UpgradeClickPower(currentClickPower * 1.3, currentClickUpgradeCost * 2) }}>
        <figure>
          <img src={GameButton} className="UpgradeImage" alt="Upgrade Button" height="200"></img>
          <figcaption className='UpgradeText'>  Upgrade Click Cost: {formattedUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => {updateIsAutoClicking(); UpgradeMinerPower(currentAutoClick+1, currentMinerUpgradeCost*2) }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Hire Mana Miner Cost: {currentMinerUpgradeCost} Mana </figcaption>
        </figure>
      </button>
    </div>
    <div className='PlayingField'>
      <button onClick={() => { handleManaUpdate(); displaySplash() }}>
        <div className='OrbCombo'>
          <img className="Orb" src={Orb} alt="Mana Orb" height="200"></img>
          <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
          <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="50"></img>
          <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
          <br></br><br></br>
          <img></img>
        </div>
      </button>
    </div>
  </div>
}


export default ManaClicker