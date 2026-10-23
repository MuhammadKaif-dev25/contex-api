import React, { useState } from 'react'
import { useUserContent } from '../context/UserContext'

function LoginForm() {
    // 1. Destructure BOTH userInfo and setUserInfo from the context
    const { userInfo, setUserInfo } = useUserContent()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function login(e) {
        e.preventDefault()

        if (email === "z@gmail.com" && password === "1234") {
            // 2. Use setUserInfo and pass the email string variable
            setUserInfo({ email: email, name: "Muhammad Kaif" })
            alert("Logged in successfully!")
        } else {
            alert("Invalid email or password.")
        }
    }

    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={handleEmailChange} 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={handlePasswordChange} 
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            <div>
                My name is {userInfo?.name} and email is {userInfo?.email}
            </div>
        </div>
    )
}

export default LoginForm