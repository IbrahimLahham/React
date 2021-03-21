import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import './members.css'
import User from './user'
import MemberCard from '../../components/MemberCard';

function Members(props) {
    const [users, setUsers] = useState([]);
    const [blcokUsers, setBlockUsers] = useState([]);
    const [activeUsers, setActiveUsers] = useState([]);
    const [refresh, setRefresh] = useState(0);

    const [byEmail, setByEmail] = useState(true);

    const [userByEmail, setUserByEmail] = useState([]);
    const [userByName, setUserByName] = useState([]);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [suggestions, setSuggestion] = useState([]);

    function getAll() {
        fetch('/admin/getAllMembers')
            .then(r => r.json())
            .then(data => {
                if (data.ok) {
                    setUsers(data.users)
                }
            })
        // fetch('/admin/getBlockedMembers')
        //     .then(r => r.json())
        //     .then(data => {
        //         if (data.ok) {
        //             setBlockUsers(data.users)
        //         }
        //     })
        // fetch('/admin/getActiveMembers')
        //     .then(r => r.json())
        //     .then(data => {
        //         if (data.ok) {
        //             setActiveUsers(data.users)
        //         }
        //     })
    }

    function handleActive(e) {
        const active = (e.user.active);
        fetch('/admin/changeStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ _email: e.user.email, active: (!active) })
        }).then(r => r.json())
            .then(data => {
                console.log(data);
                setRefresh(refresh + 1);
            })
    }

    function handleEmail(e) {
        e.preventDefault();
        fetch('/admin/getMemberByEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        }).then(r => r.json())
            .then(data => {
                if (data.ok) {
                    setUserByEmail(data.users);
                }
            })

    }

    function handleFirstLastName(e) {
        e.preventDefault();
        console.log("firstName: ", firstName, " lastName:", lastName);
        fetch('/admin/getMemberByFirstLastName', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName })
        }).then(r => r.json())
            .then(data => {
                console.log("data from name: ", data);
                if (data.ok) {
                    setUserByName(data.users);
                }
            })
    }

    return (
        <div>
            <div>
                <button style={{ justifyContent: "center" }} onClick={(e) => { setByEmail(true) }}>email</button>
                <button style={{ margin: "auto" }} onClick={(e) => { setByEmail(false) }}>name</button>
                <button style={{ margin: "auto" }} onClick={getAll}>all</button>
            </div>
            {byEmail ? <><form onSubmit={handleEmail}>
                <input type="email" placeholder="email" name="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <button type="submit">search</button>
            </form >
                {userByEmail.map((elem, index) => {
                    return (
                        <MemberCard key={index} user={elem} handleActive={handleActive} suggestions={suggestions} setSuggestion={setSuggestion} />
                    );
                })} </> :
                <><form onSubmit={handleFirstLastName}>
                    <input type="text" name="firstName" placeholder="firstName" onChange={(e) => {
                        setFirstName(e.target.value)
                    }}></input>
                    <input type="text" name="lastName" placeholder="lastName" onChange={(e) => {
                        setLastName(e.target.value)
                    }}></input>
                    <button type="submit">search</button>
                </form>
                    {userByName.map((elem, index) => {
                        return (
                            <MemberCard key={index} user={elem} handleActive={handleActive} />
                        );
                    })}</>}

            {users.map((elem, index) => {
                return (
                    <MemberCard key={index} user={elem} handleActive={handleActive} />
                );
            })}
        </div>
    );

}

export default Members

// return (
    //     <>
    //         <div className="suggestions-container">
    //             <table class="fixed_header">
    //                 <caption id="title" className="title-bold">:כל המשתמשים</caption>
    //                 <thead>
    //                     <tr id="header">
    //                         <th className="title-bold">שם</th>
    //                         <th className="title-bold">דוא״ל</th>
    //                         <th className="title-bold">טלפון</th>
    //                         <th className="title-bold">חברה\אירגון</th>
    //                         <th className="title-bold">ח"כ\אזרח</th>
    //                         <th className="title-bold">בלוק</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {users.map((elem, index) => {

    //                         return (
    //                             <User
    //                                 key={index}
    //                                 fname={elem.firstName}
    //                                 lname={elem.lastName}
    //                                 email={elem.email}
    //                                 phone={elem.phone}
    //                                 company={elem.company}
    //                                 type={elem.type}
    //                                 active={elem.active}
    //                                 spam={handleActive}
    //                             />)
    //                     })}
    //                 </tbody>
    //             </table>

    //             <table class="fixed_header">
    //                 <caption id="title" className="title-bold">משתמשים חסומים:</caption>
    //                 <thead>
    //                     <tr id="header">
    //                         <th className="title-bold">שם</th>
    //                         <th className="title-bold">דוא״ל</th>
    //                         <th className="title-bold">טלפון</th>
    //                         <th className="title-bold">חברה\אירגון</th>
    //                         <th className="title-bold">ח"כ\אזרח</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {blcokUsers.map((elem, index) => {

    //                         return (
    //                             <User
    //                                 key={index}
    //                                 fname={elem.firstName}
    //                                 lname={elem.lastName}
    //                                 email={elem.email}
    //                                 phone={elem.phone}
    //                                 company={elem.company}
    //                                 type={elem.type}
    //                                 active={elem.active}
    //                                 spam={handleActive}
    //                             />)
    //                     })}
    //                 </tbody>
    //             </table>

    //             <table class="fixed_header">
    //                 <caption id="title" className="title-bold">משתמשים פעילים:</caption>
    //                 <thead>
    //                     <tr id="header">
    //                         <th className="title-bold">שם</th>
    //                         <th className="title-bold">דוא״ל</th>
    //                         <th className="title-bold">טלפון</th>
    //                         <th className="title-bold">חברה\אירגון</th>
    //                         <th className="title-bold">ח"כ\אזרח</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {activeUsers.map((elem, index) => {
    //                         return (
                                // <User
    //                                 key={index}
    //                                 fname={elem.firstName}
    //                                 lname={elem.lastName}
    //                                 email={elem.email}
    //                                 phone={elem.phone}
    //                                 company={elem.company}
    //                                 type={elem.type}
    //                                 active={elem.active}
    //                                 spam={handleActive}
    //                             />)
    //                     })}
    //                 </tbody>
    //             </table>

    //         </div>
    //     </>

    // )