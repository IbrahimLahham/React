import React, { useState } from "react";
import "./trackingBoard.css";

//import './normalquery.css'

const trackingBoard = () => {
  // const [book, setbook] = useState([]);

  return (
    <div>
      <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default trackingBoard;
