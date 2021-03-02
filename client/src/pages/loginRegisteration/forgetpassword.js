import React, { useState } from 'react';

//import './normalquery.css'


function Forgetpassword() {

    const [email, setEmail] = useState("");
    const[success,setSuccess]=useState("");
    function handleForgot(e){
        e.preventDefault();
        console.log(email);
        fetch('/user/ForgetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.email === true) {
                    setSuccess("check out your email to reset password")
                }
                else{
                    setSuccess("email not exist please sign up!")
                }

            })
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
                <label className="message">{success}</label>
            </div>
        </div>
    )
}

export default Forgetpassword