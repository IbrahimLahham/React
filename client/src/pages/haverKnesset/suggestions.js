import './suggestions.css'
import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Collapse } from 'reactstrap';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CloseIcon from '@material-ui/icons/Close';


import './suggestions.css';

function Suggestions(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    console.log(isOpen);
    function handleVallSug(e) {
        console.log("e: ", e);
        console.log("Suggestions selected!");
    }

    function handleXallSug(e) {
        console.log("e: ", e);
        console.log("Suggestions removed!");
    }
    return (<>
        <tr>
            <td className="title-large">{props.date}
                {isOpen === false ?
                    <ArrowLeftIcon onClick={toggle}></ArrowLeftIcon> : <ArrowDropDownIcon onClick={toggle}></ArrowDropDownIcon>}
            </td>
            <td className="title-large">{props.per}</td>
            <td className="title-large">{props.sub}</td>
            <td className="title-large">{props.offer}</td>
            <td className="title-large">
                <CheckBoxIcon style={{ color: 'green' }} onClick={(e) => { handleVallSug(props) }}>v</CheckBoxIcon>
                <CloseIcon style={{ color: 'red' }} onClick={(e) => { handleXallSug(props) }}>x</CloseIcon>
            </td>
        </tr>
        {isOpen === false ?
            <div></div> : <div></div>}
        {isOpen === true ?
            <tr>
                <td><KeyboardReturnIcon /></td>
                <td></td>
                <td colSpan="2" className="paragraph-regular">hihihihihihihi hihihihihihihihihihihi hihihihihihihihihihihihihi</td>
                <td></td>
            </tr> : <div></div>}

    </>
    );
}
export default Suggestions