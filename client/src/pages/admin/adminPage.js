import React, { useState, useEffect } from 'react';
import './adminPage.css'
import { useHistory } from 'react-router-dom';

function AdminPage(props) {
    const history = useHistory();

    return (
        <div>
            <div className="user-container">
                <button onClick={(e) => {history.push("addKnesset")}}>הוספת חברי כנסת</button>
                <button onClick={(e) => {history.push("members")}}>כל האזרחים</button>
                <button onClick={(e) => {history.push("spamSuggestions")}}>הצעות</button>
            </div>
        </div>
    )
}

export default AdminPage