import React, { useState, useEffect } from 'react';
// Table from react-bootstrap
import './haverKnesset.css'
import Suggestion from './suggestions';
import ActiveSuggestions from '../../components/activeSuggestion';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function HaverKnesset() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [myNewSuggestions, setMyNewSuggestions] = useState([]);
    const [activeSuggestions, setActiveSuggestions] = useState([]);
    const [allNewSuggestions, setAllNewSuggestions] = useState([]);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        fetch('/suggestion/byUserSuggest')
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                let arr = [];
                data.map((elem, index) => {
                    arr = [...arr, { key: index, date: "21.11.21", per: elem.toolType.type, sub: elem.subject, offer: elem.submittedBy.firstName, rejection: "true", description: elem.description, status: elem.status }];
                })
                setMyNewSuggestions(arr);
            })
        fetch('/suggestion/byKnessetMemberValidate')
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                let arr = [];
                data.map((elem, index) => {
                    arr = [...arr, { key: index, date: "21.11.21", per: elem.toolType.type, sub: elem.subject, offer: elem.submittedBy.firstName, rejection: "true", description: elem.description, status: elem.status, options: ["חבר", "אזרח"] }];
                })
                setActiveSuggestions(arr);
            })
        fetch('/suggestion/byParliamentaryTool')
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                let arr = [];
                data.map((elem, index) => {
                    arr = [...arr, { key: index, date: "21.11.21", per: elem.toolType.type, sub: elem.subject, offer: elem.submittedBy.firstName, rejection: "true", description: elem.description, status: elem.status }];
                })
                setAllNewSuggestions(arr);
            })

    }, [])

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
    const changeLanguage = lng => {          
        i18n.changeLanguage(lng);
      };

    return (
        <>
        <div className="suggestions-container">
            
            <table>
                <caption id="title" className="title-bold">{t('ownSuggestions')}</caption>
                <tr id="header">
                    <th className="title-bold">{t('date')}</th>
                    <th className="title-bold">{t('parlamintary')}</th>
                    <th className="title-bold">{t('subject')}</th>
                    <th className="title-bold">{t('offer')}</th>
                    <th className="title-bold">{t('adoptionrejection')}</th>
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
                            description={elem.description}
                            status={elem.status}
                        />)
                })}

            </table>

            <table>
                <caption id="title" className="title-bold">{t('updateSuggestions')}</caption>
                <tr id="header">
                <th className="title-bold">{t('date')}</th>
                    <th className="title-bold">{t('parlamintary')}</th>
                    <th className="title-bold">{t('subject')}</th>
                    <th className="title-bold">{t('offer')}</th>
                    <th className="title-bold">{t('status')}</th>
                </tr>
                {activeSuggestions.map((elem, index) => {
                    return (
                        <ActiveSuggestions
                            key={index}
                            date={elem.date}
                            per={elem.per}
                            sub={elem.sub}
                            offer={elem.offer}
                            description={elem.description}
                            options={elem.options}
                            status={elem.status}
                        />
                    );
                })}
            </table>

            <table>
                <caption id="title" className="title-bold">{t('allSuggestions')}</caption>
                <tr id="header">
                    <th className="title-bold">{t('date')}</th>
                    <th className="title-bold">{t('parlamintary')}</th>
                    <th className="title-bold">{t('subject')}</th>
                    <th className="title-bold">{t('offer')}</th>
                    <th className="title-bold">{t('adoptionrejection')}</th>
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
                            description={elem.description}
                            status={elem.status}
                        />

                    );
                })}
            </table>

            
        </div>
        <button onClick={() => changeLanguage('hb')}>Hb</button>
            <button onClick={() => changeLanguage('ar')}>ar</button>
        </>

    )
}

export default HaverKnesset