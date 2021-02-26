import React, { useState, useEffect } from 'react';
import './loginRegisteration.css'



function LoginRegisteration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {

    }, []);

    function handleLogin(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // fetch("/GET_LogIn", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({email,password}),
        //   })
        //     .then((r) => r.json())
        //     .then((data) => {
        //       console.log(data)
        //     });
    }

    return (
        <div className="user-container">
            <div className="user-login-div">
                <h1 className="title-bold-big">כניסה</h1>
                <div className="user-login-flex">
                    <a className="title-bold">דוא"ל:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">סיסמה:</a>
                    <input type="password" className="input-field" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handleLogin}>התחברות</button>
            </div>

            <div className="user-login-div">
                <h1 className="title-bold-big">כניסה</h1>
                <div className="user-login-flex">
                    <a className="title-bold">דוא"ל:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">סיסמה:</a>
                    <input type="password" className="input-field" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handleLogin}>התחברות</button>
            </div>

        </div>
    )
}

export default LoginRegisteration