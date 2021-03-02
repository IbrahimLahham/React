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
    const [error,setError]=useState("");
    const [registermessage,setRegisterMessage]=useState("");

    useEffect(() => {

    }, []);

    function handleLogin(e) {
        fetch('/user/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:loginEmail, password:loginPassword })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                //if login true - redirect to forms creation page;
                if (data.login === true) {
                    if(data.type === "citizen")
                    history.push('/parliamentaryTool')
                    else{
                        history.push('/haverKnesset')
                    }
                }
                else{
                    setError("email or password not correct!!")
                }

            })
    }

    function handleRegister(e) {
        e.preventDefault();
        console.log({ firstName: firstName, lastName: lastName, email: email, organization: organization, telephon: telephon })
        fetch('/user/Registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName:firstName, lastName:lastName,email:email ,company:organization,phone:telephon})
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                //if login true - redirect to forms creation page;
                if (data.rgisteer === true) {
                    setRegisterMessage("just one step!check your mail to set a paasword for you!")
                }
                else{
                    setRegisterMessage("the email is exist!")
                }

            })
    }

    return (
        <div>
            {/* <Header /> */}
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
                    <label className="message">{error}</label>
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
                        <input type="text" className="input-field" onChange={(e) => {
                            setTelephon(e.target.value);
                        }}></input>
                    </div>
                    <label id="required" className="paragraph-regular">*חובה למלא פרטים המסומנים בכוכבית</label>
                    <button className="user-button" onClick={handleRegister}>הרשמה</button>
                    <label className="message">{registermessage}</label>
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default LoginRegisteration