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
                <button onClick={(e) => {history.push("addKnesset")}}>הוספת חברי כנסת</button>
                <button onClick={(e) => {history.push("members")}}>כל האזרחים</button>
                <button onClick={(e) => {history.push("spamSuggestions")}}>הצעות</button>
            </div>
            <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>

    )
}

export default AdminPage