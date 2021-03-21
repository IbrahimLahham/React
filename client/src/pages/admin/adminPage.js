import React from 'react';
import './adminPage.css'
import { useHistory } from 'react-router-dom';

function AdminPage() {
    const history = useHistory();

    return (
        <div>
            <div className="user-container">
                {/* TAL: use Link */}
                <button onClick={() => {history.push("addKnesset")}}>הוספת חברי כנסת</button>
                <button onClick={() => {history.push("members")}}>כל האזרחים</button>
                <button onClick={() => {history.push("spamSuggestions")}}>הצעות</button>
            </div>
        </div>
    )
}

export default AdminPage