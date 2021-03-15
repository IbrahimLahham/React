import React, { useState, useEffect } from 'react';
import './adminPage.css'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function AdminPage(props) {
    const { t, i18n } = useTranslation();
    const history = useHistory();

    useEffect(() => {

    }, []);
    
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };


    return (

        <div>
            <div className="user-container">
                <button onClick={(e) => {history.push("addKnesset")}}>add member</button>
                <button onClick={(e) => {history.push("members")}}>all member</button>
                <button onClick={(e) => {history.push("spamSuggestions")}}>spam</button>
            </div>
            <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>

    )
}

export default AdminPage