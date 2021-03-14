import React, { useState, useEffect } from 'react';
import './members.css'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Members(props) {
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const [users, setUsers] = useState([]);

    useEffect(() => {

    }, []);


    function allMembers() {
        console.log("all members!");
        fetch('/admin/getAllMembers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data.users);
                setUsers(data.users);
            });
    }

    function blockedMembers() {
        console.log("blocked members!");
        fetch('/admin/getBlockedMembers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data.users);
                setUsers(data.users);
            });
    }

    function activeMembers() {
        console.log("active members!");
        fetch('/admin/getActiveMembers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data.users);
                setUsers(data.users);
            });
    }

    function changeStatus(e) {
        e.preventDefault();
        const email = e.target.children[0].innerText;
        const active = (e.target.children[1].innerText === "true");
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

                <button onClick={allMembers}>all</button>
                <button onClick={blockedMembers}>blocked</button>
                <button onClick={activeMembers}>active</button>

            </div>
            <div>
                {/* {console.log("users: ", users[0])} */}
                {users.map((elem, index) => {
                    return (
                        <form onSubmit={changeStatus}>
                            <a>{elem.email}</a>
                            <a>{""+elem.active}</a>
                            <button type="submit">change status</button>
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

export default Members