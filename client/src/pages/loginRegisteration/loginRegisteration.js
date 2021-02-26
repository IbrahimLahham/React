import React, { useState, useEffect } from 'react';
import './loginRegisteration.css'
import Forgetpassword from './forgetpassword';
import Header from '../../components/Header'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
        console.log({ email: loginEmail, password: loginPassword })
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log({ firstName: firstName, lastName: lastName, email: email, organization: organization, telephon: telephon })
    }

    return (
        <div>
            <Header />
            <div className="user-container">
                <div className="user-login-div">
                    <h1 className="title-bold-big">כניסה</h1>
                    <div className="user-login-flex">
                        <label className="title-bold">דוא"ל:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setLoginEmail(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">סיסמה:</label>
                        <input type="password" className="input-field" onChange={(e) => {
                            setLoginPassword(e.target.value);
                        }}></input>
                    </div>

                    <Link id="forgot-pass" to="/forgetpassword">שכחתי סיסמה</Link>

                    <button className="user-button" onClick={handleLogin}>התחברות</button>
                </div>

                <div className="user-login-div">
                    <h1 className="title-bold-big">התחברות</h1>
                    <div className="user-login-flex">
                        <label className="title-bold">*שם פרטי:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setFirstName(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*שם משפחה:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setLastName(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*דוא"ל:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">אירגון/חברה:</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setOrganization(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">טלפון:</label>
                        <input type="number" className="input-field" onChange={(e) => {
                            setTelephon(e.target.value);
                        }}></input>
                    </div>
                    <label id="required" className="paragraph-regular">*חובה למלא פרטים המסומנים בכוכבית</label>
                    <button className="user-button" onClick={handleRegister}>הרשמה</button>
                </div>

            </div>
        </div>
    )
}

export default LoginRegisteration