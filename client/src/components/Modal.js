import {useState, useEffect} from 'react'
import ManaClicker from './ManaClicker'
function Modal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false)
   const closeModal = () => {
    setIsModalVisible(false)
    localStorage.clear()
   }
   useEffect(() => {
      if (props.mana >= 10000) {
        setIsModalVisible(true)
        
      }
    }
    , [props.mana])
    return (
        <div className={isModalVisible ? "modal-bg" : 'modal-notVisible'}>
                <h1><button onClick={() => {closeModal()}} id="CloseButton">X</button>
                    <br></br>
                    YOU WIN!!! <br></br>
                    A Big Congrats to Class of 2022 Flex!!! <br></br>
                    Well Done Everyone <br></br>
                    Best of Luck<br></br>
                    
                </h1>
                
        </div>
    )
}

export default Modal