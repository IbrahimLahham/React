import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
    
import './forgetpassword.css'


function Forgetpassword() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const[success,setSuccess]=useState("");
    function handleForgot(e){
        e.preventDefault();
        console.log("sent data: ", {email:email});
        fetch('/user/ForgetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                if (data.ok === true) {
                    history.push('/resetPassword')
                    setSuccess("הודעה נשלחה לדוא״ל!");
                }
                else{
                    setSuccess("הדוא״ל לא קיים!");
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