import { useRadioGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./MemberCard.css";

function MemberCard(props) {
    const { handleActive } = props;
    const [suggestions, setSuggestion] = useState([]);

    function getSuggestions() {
        fetch('/admin/getSuggestionsByUserSuggest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: props.user.email })
        }).then(r => r.json())
            .then(data => {
                if (data.ok) {
                    console.log("suggestions: ", data.suggestions);
                    setSuggestion(data.suggestions);
                }
            })
    }

    function changeSpam(e) {
        const _id = e._id;
        const isSpam = (e.isSpam);
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


    return (
        <div className="members-container">
            <div className="member-card">
                <label>דוא״ל: {props.user.email}</label><br />
                <label>שם פרטי: {props.user.firstName}</label><br />
                <label>שם משפחה: {props.user.lastName}</label><br />
                <label>פעילים: {props.user.active ? "פעיל" : "חסום"}</label>
                <button onClick={(e) => { handleActive(props) }}>{props.user.active ? " חסימת משתמש" : "ביטול חסימה"}</button><br />
                <label>טלפון: {"" + props.user.phone}</label><br />
                <label>סוג: {"" + props.user.type}</label><br />
                <button onClick={getSuggestions}>suggestions</button><br />
            </div>
            {suggestions.map((elem, index) => {
                return (
                    <div className="suggestion-member">
                        <label key={index}>תוכן: {elem.description}</label><br />
                        <label>פעיל: {elem.isSpam ? "ספאם" : "לא ספאם"}</label>
                        <button onClick={(e) => { changeSpam(elem) }}>{elem.isSpam ? "ספאם" : "לא ספאם"}</button><br />
                    </div>
                );
            })}
        </div>
    );
}

export default MemberCard;

