import React, { useState, useEffect } from 'react';
import './loginRegisteration.css'



function LoginRegisteration() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephon, setTelephon] = useState("");
    const [organization, setOrganization] = useState("");

    const [loginAll, setLoginAll] = useState([]);
    const [registerAll, setRegisterAll] = useState([]);

    useEffect(() => {

    }, []);

    function handleLogin(e) {
        e.preventDefault();
        console.log({email: loginEmail, password:loginPassword})
    }

    function handleRegister(e){
        e.preventDefault();
        console.log({firstName: firstName, lastName:lastName, email: email, organization:organization, telephon:telephon})
    }

    return (
        <div className="user-container">
            <div className="user-login-div">
                <h1 className="title-bold-big">כניסה</h1>
                <div className="user-login-flex">
                    <a className="title-bold">דוא"ל:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">סיסמה:</a>
                    <input type="password" className="input-field" onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handleLogin}>התחברות</button>
            </div>

            <div className="user-login-div">
                <h1 className="title-bold-big">התחברות</h1>
                <div className="user-login-flex">
                    <a className="title-bold">*שם פרטי:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setFirstName(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">*שם משפחה:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setLastName(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">*דוא"ל:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">אירגון/חברה:</a>
                    <input type="text" className="input-field" onChange={(e) => {
                        setOrganization(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <a className="title-bold">טלפון:</a>
                    <input type="number" className="input-field" onChange={(e) => {
                        setTelephon(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handleRegister}>הרשמה</button>
            </div>

        </div>
    )
}

export default LoginRegisteration