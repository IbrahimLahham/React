import React, { useState, useEffect } from 'react';
import './spamSuggestions.css'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SuggestionCard from '../../components/SuggestionCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




function SpamSuggestions(props) {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [spam, setSpam] = useState([]);

    useEffect(() => {

    }, []);

    function showSpam(e) {
        e.preventDefault();
        fetch('/admin/checkSpam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
                if (data.ok) {
                    setSpam(data.isSpam);
                }
            });
    }

    function allSuggestions() {
        fetch('/admin/allSuggestions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
                if (data.ok) {
                    setSpam(data.isSpam);
                }
            });
    }

    function notSpam() {
        fetch('/admin/notSpam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
                if (data.ok) {
                    setSpam(data.isSpam);
                }
            });
    }

    function changeSpam(e) {
        const _id = e.suggestions._id;
        const isSpam = (e.suggestions.isSpam);
        fetch('/admin/changeSpam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _id: _id, isSpam: !isSpam })
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
            });
    }

    function changeStatus(e) {
        const email = e.suggestions.submittedBy.email;
        const active = (e.suggestions.submittedBy.active);
        fetch('/admin/changeStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, active: !active })
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
            });
    }

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (

        <div>

            <div className="user-container">

                <button onClick={allSuggestions}>כל ההצעות</button>
                <button onClick={showSpam}>הצעות ספאם</button>
                <button onClick={notSpam}>הצעות פעילות</button>

            </div>
            <div className="suggestion-container">
                {spam.map((elem, index) => {
                    return (
                        <SuggestionCard
                            key={index}
                            suggestions={elem}
                            changeSpam={changeSpam}
                            changeStatus={changeStatus}
                        />
                    );
                })}
            </div>
            <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>

    )
}

export default SpamSuggestions