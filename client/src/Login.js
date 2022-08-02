import './App.css';
import { useState } from "react"
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = e => {
        e.preventDefault();

        Login(details);

    }
    return (
        <form className="LoginForm"onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {(error !== "") ? (<div className='error'>{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                </div>
                <input type="submit" value="Login"></input>

            </div>
        </form>
    )
}

function LoginPage() {
    const adminUser = {
        email: 'admin@admin.com',
        password: "admin123"
    }
    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")

    const Login = details => {
        console.log(details)
        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("logged in")
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log("details dont match")  
            setError("details do not match")  }
    }

    const Logout = () => {
        console.log("logout")
        setUser({ name: "", email: "" })
    }
    return (
        <div>
            {(user.email !== "") ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )} </div>
    )

}
export default LoginPage

