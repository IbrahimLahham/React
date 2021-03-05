import './suggestions.css'
import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Collapse} from 'reactstrap';
function Suggestions(props) {
    const [isOpen, setIsOpen] =useState(false);
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
                    <ArrowLeftIcon onClick={toggle}></ArrowLeftIcon> : <div></div>}
                {isOpen === true ?
                    <ArrowDropDownIcon onClick={toggle}></ArrowDropDownIcon> : <div></div>}
            </td>
            <td>{isOpen===false?
                  <div></div>:<div></div>}
                {isOpen===true?
                 <td>hi</td>:<div></div>}</td>
            <td className="title-large">{props.per}</td>
            <td className="title-large">{props.sub}</td>
            <td className="title-large">{props.offer}</td>
            <td className="title-large">
                <button id="V" onClick={(e) => { handleVallSug(props) }}>v</button>
                <button id="X" onClick={(e) => { handleXallSug(props) }}>x</button>
            </td>
        </tr>
        {isOpen===false?
                  <div></div>:<div></div>}
                {isOpen===true?
                 <tr>
                     <td>hi</td>
                     <td></td>
                     <td></td>
                     <td colspan="2">lsdkjfleshfleahflfhlfhwifhwisldhfleafel</td>
                     <td></td>
                   </tr>:<div></div>}
      
    </>
    );
}
export default Suggestions