import React, { useState } from 'react';

//import './normalquery.css'


function Forgetpassword() {

    const [email, setEmail] = useState("");

    function handleForgot(e){
        e.preventDefault();
        console.log(email);
        alert(`email: ${email}`);
    }

    return (
        <div className="user-container">
            <div className="user-login-div">
                <h1 className="title-bold-big">פרטי חשבון</h1>
                <div className="user-login-flex">
                    <label className="title-bold">דוא"ל:</label>
                    <input type="text" className="input-field" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handleForgot}>שחזור</button>
            </div>
        </div>
    )
}

export default Forgetpassword