import React, { useEffect, useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function ActiveSuggestions(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [status, setStatus] = useState(props.options[0]);

    function test_select(e) {
        setStatus(e.target.value);
    }

    function select_date(e) {
        e.preventDefault();
        console.log("status: ", status);
        console.log("date: ", e.target.suggestion_date.value);
        fetch('/suggestion/updateSuggestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: status, suggestion: props, date: e.target.suggestion_date.value })
        }).then(r => r.json())
            .then(data => {
                console.log("data: ", data);
            })
    }

    return (<>
        <tr>
            <td className="title-large">{props.date.split("T")[0]}
                {isOpen === false ?
                    <ArrowLeftIcon onClick={toggle}></ArrowLeftIcon> : <ArrowDropDownIcon onClick={toggle}></ArrowDropDownIcon>}
            </td>
            <td className="title-large">{props.per}</td>
            <td className="title-large">{props.sub}</td>
            <td className="title-large">{props.offer}</td>
            <td id="test" className="title-large">
                <form onChange={test_select}>
                    <select id="status" className="drop-down-menu">
                        {props.options.map((op, index) => {
                            return (<option key={index} value={op}>{op}</option>);
                        })}
                    </select>
                </form>
                <Popup trigger={<button>בחר תאריך</button>} position="buttom center">
                    <form onSubmit={select_date}>
                        <input name="suggestion_date" type="date" defaultValue={(new Date()).toISOString().substr(0, 10)} />
                        <button type="submit">בחר תאריך</button>
                    </form>
                </Popup>
            </td>
        </tr>
        {isOpen === true ?
            <tr className="test">
                <td><KeyboardReturnIcon /></td>
                <td></td>
                <td colSpan="2" className="paragraph-regular">
                    <a>תוכן השיאלתה:</a>
                    <p>{props.description}</p>
                </td>
                <td id="status-lines">
                    <a>סטטוס מפורט:</a>
                    {props.status.map((elem, index) => {
                        return (
                            <div>
                                <a>{elem.status}</a>
                                <br />
                                <label>{elem.date.split("T")[0]}</label>
                            </div>
                        )
                    })}
                    {/* <a>תאריך אימוץ:</a>
                    <label>{props.status[0].date}</label>
                    <a>תאריך העברה למשרד:</a>
                    <label>{props.status.status}</label>
                    <a>תאריך קבלת למשרד:</a>
                    <label>{props.status.status}</label> */}
                </td>
            </tr> : null}

    </>
    );
}
export default ActiveSuggestions