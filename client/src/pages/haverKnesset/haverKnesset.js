import React, { useState } from 'react';
// Table from react-bootstrap
import './haverKnesset.css'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Collapse, CardBody, Card } from 'reactstrap';
import Suggestion from './suggestions';

function HaverKnesset() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const [book, setbook] = useState([]);
    const myNewSuggestions = [
        { date: "21.11.21", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" },
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" }
    ];
    const activeSuggestions = [
        {
            date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא",
            options: ["חבר", "אזרח"]
        },
        {
            date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא",
            options: ["חבר", "אזרח"]
        }, {
            date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא",
            options: ["חבר", "אזרח"]
        }
    ];
    const allNewSuggestions = [
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" },
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" },
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" }
    ];

    function handleVmySug(e) {
        console.log("e: ", e);
        console.log("Suggestions selected!");
    }

    function handleXmySug(e) {
        console.log("e: ", e);
        console.log("Suggestions removed!");
    }

    function handleVallSug(e) {
        console.log("e: ", e);
        console.log("Suggestions selected!");
    }

    function handleXallSug(e) {
        console.log("e: ", e);
        console.log("Suggestions removed!");
    }

    return (
        <div>
            <table>
                <caption id="title" className="title-bold">הצעות חדשות עבורי:</caption>
                <tr id="header">
                    <th className="title-bold">תאריך</th>
                    <th className="title-bold">כלי פרלמנטרי</th>
                    <th className="title-bold">נושא</th>
                    <th className="title-bold">מציע</th>
                    <th className="title-bold">אימוץ/דחיה</th>
                </tr>

                {myNewSuggestions.map((elem, index) => {

                    return (
                        <Suggestion
                            key={index}
                            date={elem.date}
                            per={elem.per}
                            sub={elem.sub}
                            offer={elem.offer} />)
                })}

            </table>

            <table>
                <caption id="title" className="title-bold">הצעות בטיפול:</caption>
                <tr id="header">
                    <th className="title-bold">תאריך</th>

                    <th className="title-bold">כלי פרלמנטרי</th>
                    <th className="title-bold">נושא</th>
                    <th className="title-bold">מציע</th>
                    <th className="title-bold">עדכון סטטוס</th>
                </tr>
                {activeSuggestions.map((elem) => {
                    return (
                        <tr>
                            <td className="title-large">{elem.date}</td>
                            <td className="title-large">{elem.per}</td>
                            <td className="title-large">{elem.sub}</td>
                            <td className="title-large">{elem.offer}</td>
                            <select id="status" className="drop-down-menu">
                                {elem.options.map((op) => { return <option value="havir">{op}</option> })}
                            </select>
                        </tr>
                    );
                })}
            </table>

            <table>
                <caption id="title" className="title-bold">הצעות חדשות כללי:</caption>
                <tr id="header">
                    <th className="title-bold">תאריך</th>
                    <th className="title-bold">כלי פרלמנטרי</th>
                    <th className="title-bold">נושא</th>
                    <th className="title-bold">מציע</th>
                    <th className="title-bold">אימוץ/דחיה</th>
                </tr>
                {allNewSuggestions.map((elem, index) => {
                    return (
                            <Suggestion
                                key={index}
                                date={elem.date}
                                per={elem.per}
                                sub={elem.sub}
                                offer={elem.offer} />
                    );
                })}
            </table>


        </div>

    )
}

export default HaverKnesset