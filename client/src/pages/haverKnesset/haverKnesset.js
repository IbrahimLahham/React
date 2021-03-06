import React, { useState, useEffect } from 'react';
// Table from react-bootstrap
import './haverKnesset.css'
import Suggestion from './suggestions';
import ActiveSuggestions from '../../components/activeSuggestion';

function HaverKnesset() {
    const [isOpen, setIsOpen] = useState(false);
    const [myNewSuggestions, setMyNewSuggestions] = useState([]);
    const [activeSuggestions, setActiveSuggestions] = useState([]);
    const [allNewSuggestions, setAllNewSuggestions] = useState([]);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        fetch('/suggestion/byUserSuggest')
            .then(r => r.json())
            .then(data => {
                console.log(data);
                data.map((elem, index) =>{
                    setMyNewSuggestions([...myNewSuggestions, { key:index, date: "21.11.21", per: "נאום בן דקה", sub: elem.subject, offer: "בלאבלא", rejection: "true", description:elem.description, status: elem.status }])
                })
                setActiveSuggestions([
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
                ]);
                setAllNewSuggestions([
                    { date: "21.11.21", per: "נאום בן דקה", sub: data[0].subject, offer: "בלאבלא", rejection: "true", description:data[0].description, status: data[0].status },
                    { date: "21.11.21", per: "נאום בן דקה", sub: data[0].subject, offer: "בלאבלא", rejection: "true", description:data[0].description, status: data[0].status },
                    { date: "21.11.21", per: "נאום בן דקה", sub: data[0].subject, offer: "בלאבלא", rejection: "true", description:data[0].description, status: data[0].status }                ]);
            })
            
    }, [])
    // const [book, setbook] = useState([]);
    
    

    function handleVmySug(e) {
        console.log("e: ", e);
        console.log("my Suggestions selected!");
    }

    function handleXmySug(e) {
        console.log("e: ", e);
        console.log("my Suggestions removed!");
    }

    function handleVallSug(e) {
        console.log("e: ", e);
        console.log("all Suggestions selected!");
    }

    function handleXallSug(e) {
        console.log("e: ", e);
        console.log("all Suggestions removed!");
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
                            offer={elem.offer}
                            add={handleVmySug}
                            remove={handleXmySug}
                            description= {elem.description}
                            status={elem.status}
                        />)
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
                {activeSuggestions.map((elem, index) => {
                    return (
                        <ActiveSuggestions
                            key={index}
                            date={elem.date}
                            per={elem.per}
                            sub={elem.sub}
                            offer={elem.offer}
                            options={elem.options}
                        />
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
                            offer={elem.offer}
                            add={handleVallSug}
                            remove={handleXallSug}
                            description= {elem.description}
                            status={elem.status}
                        />
                        
                    );
                })}
            </table>


        </div>

    )
}

export default HaverKnesset