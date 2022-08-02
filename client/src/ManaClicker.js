import './App.css';
import { useState, useEffect } from 'react';
import Orb from './Untitled.png';
import GameButton from "./gameButton.png";
import GreenSplash from "./GreenSplash.png"

function ManaCounter(props) {
  // displays the counter
  let Mana = props.mana
  let formattedMana = Math.round(Mana.toLocaleString('en-US'));
  return <div>
      {formattedMana} Mana
    </div>
}

function ManaClicker(props) {
  const [currentClickPower, setClickPower] = useState(1)
  const [currentUpgradeCost, setUpgradeCost] = useState(25)
  const [currentMana, setMana] = useState(0)
  const [currentAutoClick, setAutoClick] = useState(0)
  const [isAutoClicking, setIsAutoClicking] = useState(false)
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState(false)

  // autoclicking upgrade 
  useEffect(() => {
    if (isAutoClicking) {
      setTimeout(() =>
        setMana(currentMana + currentAutoClick), 1000);
      console.log('autoclicked')
    }
  }, [isAutoClicking, counter])

  setInterval(function () {
    setCounter(counter + 1)
  }, 1000);

  let displaySplash = () => {
    setIsActive(true)
    setTimeout(() =>
      setIsActive(false), 250)
  }

  // states whether is auto clicking is false or true
  let updateIsAutoClicking = () => {
    if (!isAutoClicking) {
      setIsAutoClicking(true)
    }

  }
  // updates the autoclick power
  let handleAutoClickUpdate = () => {
    setAutoClick(currentAutoClick + 1)
  }
  // adds to total mana (used in clicking)
  let handleManaUpdate = () => {
    setMana(prevCurrentMana => prevCurrentMana + currentClickPower)
  }
  // upgrade for clicking
  const Upgrade = (newPower, upgradeCost) => {
    if (currentMana < currentUpgradeCost) {
      alert('Not Enough Mana!!')
    } else {
      setMana(currentMana - currentUpgradeCost)
      setClickPower(newPower)
      setUpgradeCost(upgradeCost)
    }
  }
  // used to change number to add comma on thousandths 
  let formattedUpgradeCost = currentUpgradeCost.toLocaleString('en-US');

  return <div className='home'>
    <div>
      <ManaCounter mana={currentMana} />
    </div>
    <div className='Upgrades'>
      <button onClick={() => { Upgrade(currentClickPower * 1.3, currentUpgradeCost * 2) }}>
        <figure>
          <img src={GameButton} className="UpgradeImage" alt="Upgrade Button" height="200"></img>
          <figcaption className='UpgradeText'>  Upgrade Click Cost: {formattedUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { handleAutoClickUpdate(); updateIsAutoClicking() }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Hire Mana Miner Cost: {formattedUpgradeCost} Mana </figcaption>
        </figure>
      </button>
    </div>
    <div>
      <button onClick={() => { handleManaUpdate(); displaySplash() }}>
        <div className='OrbCombo'>
          <img className="Orb" src={Orb} alt="Mana Orb" height="200"></img>
          <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="200"></img>
        </div>
      </button>
    </div>
  </div>
}


export default ManaClicker