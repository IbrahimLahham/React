import React, { useState } from 'react';
// Table from react-bootstrap
import './haverKnesset.css'

function HaverKnesset() {

    // const [book, setbook] = useState([]);
    const myNewSuggestions = [
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" },
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" }
    ];
    const activeSuggestions = [
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" }
    ];
    const allNewSuggestions = [
        { date: "21.11.20", per: "נאום בן דקה", sub: "בלאבלא", offer: "בלאבלא", rejection: "true" }
    ];
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
                {myNewSuggestions.map((elem) => {
                    return (
                        <tr>
                            <td className="title-large">{elem.date}</td>
                            <td className="title-large">{elem.per}</td>
                            <td className="title-large">{elem.sub}</td>
                            <td className="title-large">{elem.offer}</td>
                            <td className="title-large">{elem.rejection}</td>
                        </tr>
                    );
                })}
            </table>

            <table>
                <caption id="title" className="title-bold">הצעות בטיפול:</caption>
                <tr id="header">
                    <th className="title-bold">תאריך</th>
                    <th className="title-bold">כלי פרלמנטרי</th>
                    <th className="title-bold">נושא</th>
                    <th className="title-bold">מציע</th>
                    <th className="title-bold">אימוץ/דחיה</th>
                </tr>
                {activeSuggestions.map((elem) => {
                    return (
                        <tr>
                            <td className="title-large">{elem.date}</td>
                            <td className="title-large">{elem.per}</td>
                            <td className="title-large">{elem.sub}</td>
                            <td className="title-large">{elem.offer}</td>
                            <td className="title-large">{elem.rejection}</td>
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
                {allNewSuggestions.map((elem) => {
                    return (
                        <tr>
                            <td className="title-large">{elem.date}</td>
                            <td className="title-large">{elem.per}</td>
                            <td className="title-large">{elem.sub}</td>
                            <td className="title-large">{elem.offer}</td>
                            <td className="title-large">{elem.rejection}</td>
                        </tr>
                    );
                })}
            </table>


        </div>

    )
}

export default HaverKnesset