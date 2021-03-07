import React, { useState, useEffect } from 'react';
import './loginRegisteration.css'
import Forgetpassword from './forgetpassword';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useHistory } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function LoginRegisteration() {
    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephon, setTelephon] = useState("");
    const [organization, setOrganization] = useState("");
    const [error, setError] = useState("");
    const [registermessage, setRegisterMessage] = useState("");

    useEffect(() => {

    }, []);

    function handleLogin(e) {
        e.preventDefault();

        fetch('/user/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loginEmail, password: loginPassword })
        }).then(r => r.json())
            .then(data => {
                console.log("sent data: ", { loginEmail: loginEmail, password: loginPassword });
                console.log("server data: ", data);
                // if login true - redirect to forms creation page;
                if (data.ok === true) {
                    if (data.user === "ezrah")
                        history.push('/parliamentaryTool')
                    else {
                        history.push('/haverKnesset')
                    }
                }
                else {
                    setError("דוא״ל או סיסמה שגויים!");
                }
            })
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log({ firstName: firstName, lastName: lastName, email: email, organization: organization, telephon: telephon })

        // firstName doesn't contrains numbers 


        fetch('/user/Registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, company: organization, phone: telephon })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                //if login true - redirect to forms creation page;
                if (data.ok === true) {
                    setRegisterMessage("צעד אחד נותר, תבדוק הדוא״ל.");
                    fetch('/send-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ from: "openknessetdev@gmail.com", to: email, subject: "OpenKnesset Registeration", text: "your temporary password: 1234\nreset password via the link: localhost:3000/resetPassword" })
                    }).then(r => r.json())
                        .then(data => {
                            console.log(data);
                        })
                }
                else {
                    setRegisterMessage("הדוא״ל כבר קיים !")
                }

            })
    }

    return (
        <div>
            <div className="user-container">

                <form onSubmit={handleLogin} className="user-login-div">
                    <h1 className="title-bold-big">כניסה</h1>
                    <div className="user-login-flex">
                        <label className="title-bold">דוא"ל:</label>
                        <input type="email" className="input-field" onChange={(e) => {
                            setLoginEmail(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">סיסמה:</label>
                        <input type="password" className="input-field" onChange={(e) => {
                            setLoginPassword(e.target.value);
                        }} required></input>
                    </div>

                    <Link id="forgot-pass" to="/forgetpassword">שכחתי סיסמה</Link>

                    <button className="user-button" type="submit">התחברות</button>
                    <label className="message">{error}</label>
                </form>

                <form onSubmit={handleRegister} className="user-login-div">
                    <h1 className="title-bold-big">הרשמה</h1>
                    <div className="user-login-flex">
                        <label className="title-bold">*שם פרטי:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setFirstName(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*שם משפחה:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setLastName(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*דוא"ל:</label>
                        <input type="email" className="input-field" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">אירגון/חברה:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setOrganization(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">טלפון:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setTelephon(e.target.value);
                        }}></input>
                    </div>
                    <label id="required" className="paragraph-regular">*חובה למלא פרטים המסומנים בכוכבית</label>
                    <button className="user-button" type="submit">הרשמה</button>
                    <label className="message">{registermessage}</label>
                </form>

            </div>
        </div>

    )
}

export default LoginRegisteration