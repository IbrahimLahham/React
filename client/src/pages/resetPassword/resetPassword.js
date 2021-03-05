import React, { useState } from 'react';

//import './normalquery.css'


const ResetPassword = () => {

    const [newpassword, setNewPassword] = useState("")
    const [repeatnewpassword, setRepeatNewPassword] = useState("")
    const[success,setSuccess]=useState("");
    function handlereset(e) {
        e.preventDefault();
        console.log(newpassword,repeatnewpassword);
        if(newpassword===repeatnewpassword){
        fetch('/user/savePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newpassword })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                
                   
                    setSuccess(" הסיסמה שונתה בהצלחה");
               
                

            })}else{
              setSuccess("לא אותו דבר!")
            }
    }

    return (
        <div className="user-container">
            <div className="user-login-div">
                <h1 className="title-bold-big">שחזור סיסמה</h1>
                <div className="user-login-flex">
                    <label className="title-bold">סיסמה חדשה</label>
                    <input type="text" className="input-field" onChange={(e) => {
                        setNewPassword(e.target.value);
                    }}></input>
                </div>
                <div className="user-login-flex">
                    <label className="title-bold">לחֲזוֹר סיסמה</label>
                    <input type="text" className="input-field" onChange={(e) => {
                        setRepeatNewPassword(e.target.value);
                    }}></input>
                </div>
                <button className="user-button" onClick={handlereset}>שחזור</button>
                <label className="message">{success}</label>
            </div>
        </div>
    )
}

export default ResetPassword