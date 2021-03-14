import React, { useState, useEffect } from 'react';
import './spamSuggestions.css'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
                setSpam(data.isSpam);
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
                setSpam(data.isSpam);
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
                setSpam(data.isSpam);
            });
    }

    function changeSpam(e) {
        e.preventDefault();
        const _id = e.target.children[2].innerText;
        const isSpam = (e.target.children[1].innerText === "true");
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


    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (

        <div>

            <div className="user-container">

                <button onClick={allSuggestions}>all</button>
                <button onClick={showSpam}>spam</button>
                <button onClick={notSpam}>active</button>

            </div>
            <div>
                {spam.map((elem, index) => {
                    return (
                        <form key={index} onSubmit={changeSpam}>
                            <a>{elem.description}</a>
                            <label>{""+elem.isSpam}</label>
                            <a>{elem._id}</a>
                            <button type="submit">change spam</button>
                            <br />
                        </form>
                    );
                })}
            </div>
            <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </div>

    )
}

export default SpamSuggestions