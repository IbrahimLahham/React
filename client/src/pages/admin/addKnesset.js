import React, { useState, useEffect } from 'react';
import './addKnesset.css'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function AddKnesset(props) {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephon, setTelephon] = useState("");
    const [organization, setOrganization] = useState("");
    const [error, setError] = useState("");
    const [registermessage, setRegisterMessage] = useState("");

    useEffect(() => {

    }, []);


    function handleRegister(e) {
        e.preventDefault();
        console.log({ firstName: firstName, lastName: lastName, email: email, organization: organization, telephon: telephon })

        // firstName doesn't contrains numbers 

        const validPhone = new RegExp("(00972|0|\\+972)[5][0-9]{8}");
        if (validPhone.test(telephon)) {

            fetch('/user/Registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, company: organization, phone: telephon, type: "knessetMember" })
            }).then(r => r.json())
                .then(data => {
                    console.log(data);
                    //if login true - redirect to forms creation page;
                    if (data.ok === true) {
                        setRegisterMessage(`${firstName} נוצר בהצלחה!`);
                    }
                    else {
                        setRegisterMessage("הדוא״ל כבר קיים !")
                    }

                })
        }
        else {
            setRegisterMessage("מספר טלפון לא חוקי!")
        }
    }

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };


    return (

        <div>

            <div className="user-container">

                <form onSubmit={handleRegister} className="user-login-div">
                    <h1 className="title-bold-big">{t('signup')}</h1>
                    <div className="user-login-flex">
                        <label className="title-bold">*{t('firstName')}</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setFirstName(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*{t('lastName')}</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setLastName(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">*{t('email')}</label>
                        <input type="email" className="input-field" onChange={(e) => {
                            setEmail(e.target.value);
                        }} required></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">{t('company')}</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setOrganization(e.target.value);
                        }}></input>
                    </div>
                    <div className="user-login-flex">
                        <label className="title-bold">{t('phone')}</label>
                        <input type="text" className="input-field" onChange={(e) => {
                            setTelephon(e.target.value);
                        }}></input>
                    </div>
                    <label id="required" className="paragraph-regular">*{t('star')}</label>
                    <button className="user-button" type="submit">{t('buttonSignup')}</button>
                    <label className="message">{registermessage}</label>
                </form>

            </div>
            <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>

    )
}

export default AddKnesset