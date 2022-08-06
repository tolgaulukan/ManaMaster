import '../App.css';
import classNames from 'classnames'
import { useState, useEffect } from 'react';
import Orb from '../images/Untitled.png';
import GameButton from '../images/gameButton.png'
import GreenSplash from "../images/GreenSplash.png"
import Wizard from "../images/Wizard.png"
import GoblinAxe from "../images/GoblinAxe.png"
import Knight from "../images/Knight.png"
import GoblinArcher from "../images/GoblinArcher.png"
import LoginPage from './Login';
import Modal from './Modal';
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
  const [currentWizardCost, setWizardCost] = useState(7.5 )
  const [currentKnightCost, setKnightCost] = useState(50)
  const [currentMana, setMana] = useState(0)
  const [currentAutoClick, setAutoClick] = useState(0)
  const [isAutoClicking, setIsAutoClicking] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isWizardDisplayed, setIsWizardDisplayed] = useState(false)
  const [isGoblinAxeDisplayed, setIsGoblinAxeDisplayed] = useState(false)
  const [goblinAxeDamage, setGoblinAxeDamage] = useState(1)
  const [isKnightDisplayed, setIsKnightDisplayed] = useState(false)
  const [isGoblinArcherDisplayed, setIsGoblinArcherDisplayed] = useState(false)
  const [goblinArcherDamage, setGoblinArcherDamage] = useState(2)
  const [isBlueOrb, setIsBlueOrb] = useState(false)
  const [isRedOrb, setIsRedOrb] = useState(false)
  const [isPurpleOrb, setIsPurpleOrb] = useState(false)
  const [isWhiteOrb, setIsWhiteOrb] = useState(false)
  const [isGoldOrb, setIsGoldOrb] = useState(false)


  useEffect(() => {
    if (currentMana < 100) {
      setGoblinAxeDamage(1)
      setGoblinArcherDamage(2)
    } else if (currentMana > 100) {
      setGoblinAxeDamage(2)
      setGoblinArcherDamage(5)
    } else if (currentMana > 500) {
      setGoblinAxeDamage(5)
      setGoblinArcherDamage(10)
    } else if (currentMana > 1500) {
      setGoblinAxeDamage(10)
      setGoblinArcherDamage(50)
    } else if (currentMana > 10000) {
      setGoblinAxeDamage(25)
      setGoblinArcherDamage(100)
    } else if (currentMana > 50000) {
      setGoblinAxeDamage(50)
      setGoblinArcherDamage(500)
    } else if (currentMana > 100000) {
      setGoblinAxeDamage(500)
      setGoblinArcherDamage(2000)
    } else if (currentMana > 500000) {
      setGoblinAxeDamage(1000)
      setGoblinArcherDamage(2500)
    }
  }
    , [currentMana])

    useEffect(() => {
        if ( currentClickPower >= 2.5) {
          setIsBlueOrb(true)
        }
    }
      , [currentClickPower])

      useEffect(() => {
        if ( currentClickPower >= 6) {
          setIsBlueOrb(false)
          setIsRedOrb(true)
        }
    }
      , [currentClickPower])

      useEffect(() => {
        if ( currentClickPower >= 9) {
          setIsRedOrb(false)
          setIsPurpleOrb(true)
        }
    }
      , [currentClickPower])

      useEffect(() => {
        if ( currentClickPower >= 14) {
          setIsPurpleOrb(false)
          setIsWhiteOrb(true)
        }
    }
      , [currentClickPower])

      useEffect(() => {
        if ( currentClickPower >= 25) {
          setIsWhiteOrb(false)
          setIsGoldOrb(true)
        }
    }
      , [currentClickPower])
  // autoclicking upgrade 
  useEffect(() => {
    const autoClickInterval = setInterval(() => {
      if (isAutoClicking) {
        setMana((currentMana) => currentMana + currentAutoClick)
      }
    }, 1000);
    return () => clearInterval(autoClickInterval)
  }
    , [isAutoClicking, currentAutoClick])

  useEffect(() => {
    const goblinAxeDisplay = setInterval(() => {
      if (!isGoblinAxeDisplayed) {
        setIsGoblinAxeDisplayed(true)
      }
    }, (Math.random() * (120000 - 50000) + 50000));
    return () => clearInterval(goblinAxeDisplay)
  }, [])


  useEffect(() => {
    const goblinArcherDisplay = setInterval(() => {
      if (!isGoblinArcherDisplayed) {
        setIsGoblinArcherDisplayed(true)
      }
    }, (Math.random() * (150000 - 60000) + 60000));
    return () => clearInterval(goblinArcherDisplay)
  }, []);
  // when goblin appears he takes mana away
  useEffect(() => {
    const goblinAxeInterval = setInterval(() => {
      if (isGoblinAxeDisplayed) {
        setMana((currentMana) => currentMana - goblinAxeDamage)
      }
    }, 1000);
    return () => clearInterval(goblinAxeInterval)
  }, [isGoblinAxeDisplayed])


  // //displays the goblin archer
  useEffect(() => {
    const goblinArcherInterval = setInterval(() => {
      if (isGoblinArcherDisplayed) {
        setMana((currentMana) => currentMana - goblinArcherDamage)
      }
    }, 1000);
    return () => clearInterval(goblinArcherInterval)
  }, [isGoblinArcherDisplayed])
  //  sets mana state as local storage mana
  useEffect(() => {
    const localStorageMana = localStorage.getItem('mana')
    console.log(localStorageMana)
    if (localStorageMana != null) {
      setMana(JSON.parse(localStorageMana))
    }
  }, [])
  // adds mana to local storage
  useEffect(() => {
    localStorage.setItem('mana', JSON.stringify(currentMana))
  }, [currentMana])
  //  sets click power state as local storage click power
  useEffect(() => {
    const localStorageClickPower = localStorage.getItem('clickPower')
    console.log(localStorageClickPower)
    if (localStorageClickPower != null) {
      setClickPower(JSON.parse(localStorageClickPower))
    }
  }, [])
  // adds clickpower to local storage
  useEffect(() => {
    localStorage.setItem('clickPower', JSON.stringify(currentClickPower))
  }, [currentClickPower])
  //  sets click upgrade cost state as local storage click power
  useEffect(() => {
    const localStorageClickUpgradeCost = localStorage.getItem('clickUpgradeCost')
    if (localStorageClickUpgradeCost != null) {
      setClickUpgradeCost(JSON.parse(localStorageClickUpgradeCost))
    }
  }, [])
  // adds click upgrade cost to local storage
  useEffect(() => {
    localStorage.setItem('clickUpgradeCost', JSON.stringify(currentClickUpgradeCost))
  }, [currentClickUpgradeCost])
  //  sets miner upgrade cost state as local storage click power
  useEffect(() => {
    const localStorageMinerUpgradeCost = localStorage.getItem('minerUpgradeCost')
    if (localStorageMinerUpgradeCost != null) {
      setMinerUpgradeCost(JSON.parse(localStorageMinerUpgradeCost))
    }
  }, [])
  // adds miner upgrade cost to local storage
  useEffect(() => {
    localStorage.setItem('minerUpgradeCost', JSON.stringify(currentMinerUpgradeCost))
  }, [currentMinerUpgradeCost])

  useEffect(() => {
    const localStorageAutoClick = localStorage.getItem('autoClick')
    if (localStorageAutoClick != null) {
      setAutoClick(JSON.parse(localStorageAutoClick))
    }
  }, [])
  // adds miner upgrade cost to local storage
  useEffect(() => {
    localStorage.setItem('autoClick', JSON.stringify(currentAutoClick))
  }, [currentAutoClick])
  useEffect(() => {
    const localStorageWizardCost = localStorage.getItem('wizardCost')
    if (localStorageWizardCost != null) {
      setWizardCost(JSON.parse(localStorageWizardCost))
    }
  }, [])
  // adds miner upgrade cost to local storage
  useEffect(() => {
    localStorage.setItem('wizardCost', JSON.stringify(currentWizardCost))
  }, [currentWizardCost])

  useEffect(() => {
    const localStorageKnightCost = localStorage.getItem('knightCost')
    if (localStorageKnightCost != null) {
      setKnightCost(JSON.parse(localStorageKnightCost))
    }
  }, [])
  // adds miner upgrade cost to local storage
  useEffect(() => {
    localStorage.setItem('knightCost', JSON.stringify(currentKnightCost))
  }, [currentKnightCost])
  // displays the pickaxe cartoon
  let displaySplash = () => {
    setIsActive(true)
    setTimeout(() =>
      setIsActive(false), 250)
  }
  // displays the wizard cartoon
  let displayWizard = (upgradeCost) => {
    if (currentMana < currentWizardCost) {
      alert('Not Enough Mana!!')
    } else {
      setIsWizardDisplayed(true)
      setTimeout(() =>
        setIsGoblinAxeDisplayed(false), 2000)
      setTimeout(() =>
        setIsWizardDisplayed(false), 2000)
      setMana((currentMana) => currentMana - currentWizardCost)
      setWizardCost(upgradeCost)
    }
  }
  //displays the kngiht cartoon
  let displayKnight = (upgradeCost) => {
    if (currentMana < currentKnightCost) {
      alert('Not Enough Mana!!')
    } else {
      setIsKnightDisplayed(true)
      setTimeout(() =>
        setIsGoblinArcherDisplayed(false), 2000)
      setTimeout(() =>
        setIsKnightDisplayed(false), 2000)
      setMana((currentMana) => currentMana - currentKnightCost)
      setKnightCost(upgradeCost)
    }
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
  // upgrade for click power
  const UpgradeClickPower = (newPower, upgradeCost) => {
    if (currentMana < currentClickUpgradeCost) {
      alert('Not Enough Mana!!')
    } else {
      setMana((currentMana) => currentMana - currentClickUpgradeCost)
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
      setMana((currentMana) => currentMana - currentMinerUpgradeCost)
      setAutoClick(newPower)
      setMinerUpgradeCost(upgradeCost)
    }
  }

  // used to change number to add comma on thousandths 
  let formattedUpgradeCost = Math.trunc(currentClickUpgradeCost)

  return <div className='home'>
    <ManaCounter mana={currentMana} />
    <Modal mana={currentMana}></Modal>
    <div className='Upgrades'>

      <h3 className='ClickPower'>{Math.round(currentClickPower*10)/10} Click Power</h3>
      <button onClick={() => { UpgradeClickPower(currentClickPower * 1.3, currentClickUpgradeCost * 1.5) }}>
        <figure>
          <img src={GameButton} className="UpgradeImage" alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Upgrade Click Cost:<br></br> {Math.floor(formattedUpgradeCost)} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { updateIsAutoClicking(); UpgradeMinerPower(currentAutoClick + 1, currentMinerUpgradeCost * 1.5) }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Hire Mana Miner Cost:<br></br> {Math.floor(currentMinerUpgradeCost)} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { displayWizard(currentWizardCost * 2) }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Buy Wizard Cost:<br></br>   {currentWizardCost} Mana </figcaption>
        </figure>
      </button>
      <button onClick={() => { displayKnight(currentKnightCost * 2) }}>
        <figure>
          <img className="MinerImage" src={GameButton} alt="Upgrade Button" height="200"></img>
          <figcaption className='MinerText'>  Buy knight Cost:<br></br> {currentKnightCost} Mana </figcaption>
        </figure>
      </button>
      <h3 className='CPS'>{currentAutoClick} Auto Clicks Per Second</h3>
    </div>
    <button onClick={() => { handleManaUpdate(); displaySplash() }}>
      <div className='OrbCombo'>
        <img className={classNames({"Orb": true, "BlueOrb": isBlueOrb, 'RedOrb': isRedOrb, 'PurpleOrb': isPurpleOrb, 'WhiteOrb': isWhiteOrb, 'GoldOrb': isGoldOrb})} src={Orb} alt="Mana Orb" height="200"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="50"></img>
        <img className={isActive ? 'Visible' : 'GreenSplash'} src={GreenSplash} alt="green splash" height="25"></img>
      </div></button><br></br><br></br>

    <div className='Main'>
      <h3 className='GoblinStats'>{Math.trunc(goblinAxeDamage)} Goblin Axemen Mana Damage Per Second</h3>
      <div className='PlayingField'>

        <div className='Wizard'>
          <img className={isGoblinAxeDisplayed ? 'Visible' : 'NotVisible'} alt='goblinAxe' src={GoblinAxe} height='250'></img>
          <img className={isGoblinArcherDisplayed ? 'Visible' : 'NotVisible'} alt='goblinArcher' src={GoblinArcher} height='250'></img>

        </div>
        <div className='Knight'>
          <img className={isWizardDisplayed ? 'Visible' : 'NotVisible'} alt='wizard' src={Wizard} height='350'></img>
          <img className={isKnightDisplayed ? 'Visible' : 'NotVisible'} alt='knight' src={Knight} height='350'></img>

        </div>

      </div>
      <h3 className='GoblinStats'>{Math.trunc(goblinArcherDamage)} Goblin Archer Mana Damage Per Second</h3>
    </div>

  </div>
}

export default ManaClicker