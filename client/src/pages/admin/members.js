import React, { useState, useEffect } from 'react';
import './members.css'
import User from './user'

function Members(props) {
    const [users,setUsers]=useState([]);
    const [blcokUsers,setBlockUsers]=useState([]);
    const [activeUsers,setActiveUsers]=useState([]);
    useEffect(() => {
        fetch('/admin/getAllMembers')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setUsers(data.users)
                
            })
            fetch('/admin/getBlockedMembers')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setBlockUsers(data.users)
                
            })
            fetch('/admin/getActiveMembers')
            .then(r => r.json())
            .then(data => {
                console.log(data)
                setActiveUsers(data.users)
                
            })

    }, [])

    function handleSpam(e) {
        console.log("e: ",e.email,e.active );
        const _id = e._id;
        const active=!e.active;
        fetch('/admin/changeStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _id: _id, isSpam: active })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>
       
        <table>
        <caption id="title" className="title-bold">:כל המשתמשים</caption>
        <tr id="header">
            <th className="title-bold">שם</th>
            <th className="title-bold">דוא״ל</th>
            <th className="title-bold">טלפון</th>
            <th className="title-bold">חברה\אירגון</th>
            <th className="title-bold">ח"כ\אזרח</th>
            <th className="title-bold">בלוק</th>
        </tr>

        {users.map((elem, index) => {

            return (
                <User
                    key={index}
                    fname={elem.firstName}
                    lname={elem.lastName}
                    email={elem.email}
                    phone={elem.phone}
                    company={elem.company}
                    type={elem.type}
                    active={elem.active}
                    spam={handleSpam}
                />)
        })}

    </table>
    
<table>
<caption id="title" className="title-bold">משתמשים חסומים:</caption>
<tr id="header">
    <th className="title-bold">שם</th>
    <th className="title-bold">דוא״ל</th>
    <th className="title-bold">טלפון</th>
    <th className="title-bold">חברה\אירגון</th>
    <th className="title-bold">ח"כ\אזרח</th>
</tr>

{blcokUsers.map((elem, index) => {

    return (
        <User
            key={index}
            fname={elem.firstName}
            lname={elem.lastName}
            email={elem.email}
            phone={elem.phone}
            company={elem.company}
            type={elem.type}
            
        />)
})}

</table>

<table>
<caption id="title" className="title-bold">משתמשים פעילים:</caption>
<tr id="header">
    <th className="title-bold">שם</th>
    <th className="title-bold">דוא״ל</th>
    <th className="title-bold">טלפון</th>
    <th className="title-bold">חברה\אירגון</th>
    <th className="title-bold">ח"כ\אזרח</th>
</tr>

{activeUsers.map((elem, index) => {

    return (
        <User
            key={index}
            fname={elem.firstName}
            lname={elem.lastName}
            email={elem.email}
            phone={elem.phone}
            company={elem.company}
            type={elem.type}
            
        />)
})}

</table>


</>

    )
}

export default Members