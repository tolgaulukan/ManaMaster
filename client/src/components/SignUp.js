import '../App.css';
import { useState } from "react"
// import Axios from 'axios'
// import {Navigate} from 'react-router-dom'

function SignUpPage() {
//     const url = "/api/users"
//     const [Submit, setSubmit] = useState(false)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        photoURL: ""
    })
   

    // const inputHandler = e => {
    //     const newdata={...data}
    //     newdata[e.target.id] = e.target.value
    //     setData(newdata)

    // }

    return (<div>
        {/* {Submit ? <Navigate to="/"/> : null} */}
        
        <form className='LoginForm' >
            <div className='form-inner'><h2 className="title">Create Account</h2>

                <div className='form-group'>
                    <label className='label'>name:</label>
                    <input className='input' type="text" value={data.name}></input>
                </div>
                <div className='form-group'>
                    <label className='label'>email:</label>
                    <input className='input' type="text" value={data.email}></input>
                </div>
                <div className='form-group'>
                    <label className='label'>password:</label>
                    <input className='input' type="text"  value={data.password}></input>
                </div>
                <div className='form-group'>
                    <label className='label'>username:</label>
                    <input className='input' type="text"  value={data.username}></input>
                </div>
                <div className='form-group'>
                    <label className='label'>photo URL:</label>
                    <input className='input' type="text"  value={data.photoURL}></input>
                </div>
                <div>
                    <input type="submit" value="Sign Up"></input>
                </div>
            </div>
        </form></div>
    )
}
export default SignUpPage