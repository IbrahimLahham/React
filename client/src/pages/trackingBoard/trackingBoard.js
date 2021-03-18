import React, { useState, useEffect } from "react";
import "./trackingBoard.css";

//import './normalquery.css'

const TrackingBoard = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/suggestion/byUserSuggest")
      .then((r) => r.json())
      .then((data) => {
        console.log("Suggestions data: ", data);
        if (data.ok === true) {
          setSuggestions(data.suggestions);
        }
        //alert("am in");
      });
  }, []);

  return (
    <div>
      <div className="container">
        {suggestions &&
          suggestions.map((suggestion, index) => {
            return (
              <div className="board-item-container">
                <div className="board-item">
                  <p>
                    {suggestion.date} {suggestion.toolType.title}
                  </p>
                  <h1>{suggestion.subject}</h1>
                  <p>תאריך הגשה: {suggestion.date}</p>
                  <p>אומץ על ידי:</p>
                  <p>הוקרא במליאה: {console.log("Suggestion: ", suggestion)}</p>
                  <h1>תוכן:</h1>
                  <p>{suggestion.description}</p>
                </div>
              </div>
            );
          })}
        {/* <div className="board-item-container">
          <div className="board-item">
            <p>21.11.20 נאום בן דקה</p>
            <h1>סגירת מרכולים בבני ברק</h1>
            <p>תאריך הגשה: </p>
            <p>אומץ על ידי: </p>
            <p>הוקרא במליאה: </p>
            <h1>תוכן:</h1>
            <p>נודע לי כי...</p>
          </div>
        </div>
        <div className="board-item-container">
          <div className="board-item">
            <p>21.11.20 נאום בן דקה</p>
            <h1>סגירת מרכולים בבני ברק</h1>
            <p>תאריך הגשה: </p>
            <p>אומץ על ידי: </p>
            <p>הוקרא במליאה: </p>
            <h1>תוכן:</h1>
            <p>נודע לי כי...</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TrackingBoard;
