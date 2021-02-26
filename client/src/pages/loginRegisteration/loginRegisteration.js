import React, { useState} from 'react';
import './loginRegisteration.css'



const LoginRegisteration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function handleLogin(e){
        e.preventDefault();
        console.log(email);
        console.log(password);
        fetch("/GET_LogIn", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password}),
          })
            .then((r) => r.json())
            .then((data) => {
              console.log(data)
            });
    }

    return (
        <div>
            <div classname="user-login-div">
                <h1 classname="title-bold-big">כניסה</h1>
                <a classname="title-bold">דוא"ל:</a>
                <input type="text" classname="input-field" onChange={(e) => {
                    setEmail(e.target.value);
                }}></input>
                <a classname="title-bold">סיסמה:</a>
                <input type="password" classname="input-field" onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>
                <button classname="user-button" onClick={handleLogin}>התחברות</button>
            </div>
        </div>
    )
}

export default LoginRegisteration