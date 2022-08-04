import '../App.css';
import { useState, useEffect } from 'react';
import Orb from '../images/Untitled.png';
import GameButton from '../images/gameButton.png'
import GreenSplash from "../images/GreenSplash.png"
import Wizard from "../images/Wizard.png"
import GoblinAxe from "../images/GoblinAxe.png"
import Knight from "../images/Knight.png"
import GoblinArcher from "../images/GoblinArcher.png"

function ManaCounter(props) {
  // displays the counter
  let Mana = props.mana
  let formattedMana = Math.trunc(Mana);
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
  const [isWizardDisplayed, setIsWizardDisplayed] = useState(false)
  const [isGoblinAxeDisplayed, setIsGoblineAxeDisplayed] = useState(false)
  const [GoblinAxeDamage, setGoblinAxeDamage] = useState(2)
  const [isKnightDisplayed, setIsKnightDisplayed] = useState(false)
  const [isGoblinArcherDisplayed, setIsGoblineArcherDisplayed] = useState(false)
  const [GoblinArcherDamage, setGoblinArcherDamage] = useState(2)
  // autoclicking upgrade 
  useEffect(() => {
    if (isAutoClicking) {
      setInterval(() => {
        setMana((currentMana) => currentMana + currentAutoClick)
      }, 1000);
      console.log('autoclicked')

    }
  }, [isAutoClicking, currentAutoClick])
console.log(localStorage.getItem('mana'))
  // setInterval(() => {
  //   if (!isGoblinAxeDisplayed) {
  //     setIsGoblineAxeDisplayed(true)
  //   }
  // }, (Math.random() * (100000 - 20000) + 20000));

  // setInterval(() => {
  //   if (!isGoblinArcherDisplayed) {
  //     setIsGoblineArcherDisplayed(true)
  //   }
  // }, (Math.random() * (100000 - 20000) + 20000));
  // when goblin appears he takes mana away
  useEffect(() => {
    if (isGoblinAxeDisplayed) {
      if (currentMana < 100) {
        setInterval(() => {
          setMana((currentMana) => currentMana - GoblinAxeDamage)
        }, 1000);
      } else if (currentMana >= 100 && currentMana < 500) {
        setGoblinAxeDamage(10)
        setInterval(() => {
          setMana((currentMana) => currentMana - GoblinAxeDamage)
        }, 1000);
      }
    }
  }, [isGoblinAxeDisplayed])
  //displays the goblin archer
  useEffect(() => {
    if (isGoblinArcherDisplayed) {
      if (currentMana < 100) {
        setInterval(() => {
          setMana((currentMana) => currentMana - GoblinArcherDamage)
        }, 1000);
      } else if (currentMana >= 100 && currentMana < 500) {
        setGoblinArcherDamage(10)
        setInterval(() => {
          setMana((currentMana) => currentMana - GoblinArcherDamage)
        }, 1000);
      }
    }
  }, [isGoblinArcherDisplayed])
  // displays the pickaxe cartoon
  let displaySplash = () => {
    setIsActive(true)
    setTimeout(() =>
      setIsActive(false), 250)
  }
  // displays the wizard cartoon
  let displayWizard = () => {
    setIsWizardDisplayed(true)
    setTimeout(() =>
      setIsGoblineAxeDisplayed(false), 2000)
    setTimeout(() =>
      setIsWizardDisplayed(false), 2000)
  }
  //displays the kngiht cartoon
  let displayKnight = () => {
    setIsKnightDisplayed(true)
    setTimeout(() =>
      setIsGoblineArcherDisplayed(false), 2000)
    setTimeout(() =>
      setIsKnightDisplayed(false), 2000)
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
    localStorage.setItem('mana', JSON.stringify(currentMana))
  }
  useEffect(() => {
    localStorage.setItem('mana', JSON.stringify(currentMana))
  }, [currentMana])
  // upgrade for clicking
  const UpgradeClickPower = (newPower, upgradeCost) => {
    if (currentMana < currentClickUpgradeCost) {
      alert('Not Enough Mana!!')
    } else {
      setMana(currentMana - currentClickUpgradeCost)
      setClickPower(newPower)
      setClickUpgradeCost(upgradeCost)
      localStorage.setItem('clickPower', JSON.stringify(currentClickUpgradeCost))
    }
  }
  //upgrades the miner power
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
      <p>{currentClickPower.toLocaleString('en-US')} Click Power</p>
      <button onClick={() => { UpgradeClickPower(currentClickPower * 1.3, currentClickUpgradeCost * 2) }}>
        <figure>
          <img src={GameButton} className="UpgradeImage" alt="Upgrade Button" height="200"></img>
          <figcaption className='UpgradeText'>  Upgrade Click Cost: {formattedUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { updateIsAutoClicking(); UpgradeMinerPower(currentAutoClick + 1, currentMinerUpgradeCost * 2) }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Hire Mana Miner Cost: {currentMinerUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      
      <button onClick={() => { displayWizard() }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Buy Wizard Cost: {currentMinerUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { displayKnight() }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Buy knight Cost: {currentMinerUpgradeCost} Mana </figcaption>
        </figure>
      </button>
      <p className='CPS'>{currentAutoClick} Auto Clicks Per Second</p>
    </div>
    <button onClick={() => { handleManaUpdate(); displaySplash() }}>
      <div className='OrbCombo'>
        <img className={currentClickPower >= 5 ? "Orb BlueOrb": "Orb"} src={Orb} alt="Mana Orb" height="200"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="50"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
      </div></button><br></br><br></br>
    <div className='PlayingField'>

      <div className='Wizard'>
        <img className={isGoblinAxeDisplayed ? 'Visible' : 'NotVisible'} alt='goblinAxe' src={GoblinAxe} height='200'></img>
        <img className={isWizardDisplayed ? 'Visible' : 'NotVisible'} alt='wizard' src={Wizard} height='200'></img>
      </div>
      <div className='Knight'>
        <img className={isGoblinArcherDisplayed ? 'Visible' : 'NotVisible'} alt='goblinArcher' src={GoblinArcher} height='200'></img>
        <img className={isKnightDisplayed ? 'Visible' : 'NotVisible'} alt='knight' src={Knight} height='200'></img>
      </div>
    </div>
  </div>
}

export default ManaClicker