import React from "react";
import "./RegularQueryForm.css";
import Subject from "./Subject";
import at from "./Images/at.PNG";
import { Multiselect } from "multiselect-react-dropdown";

import AttachIcon from "./Images/attach-icon.png";
import AttachmentsIcon from "./Images/attacments-icon.png";
import PeopleIcon from "./Images/people.png";

function RegularQueryForm() {
  const options = [
    { name: "גפני משה", id: 1 },
    { name: "גרמל יעל", id: 2 },
    { name: "דיין עוזי", id: 1 },
    { name: "דיכנטר אבי", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
  ];
  function dummy() {
    console.log("hehe");
  }

  function onSelect(selectedList, selectedItem) {
    console.log("select invoked: ", selectedList);
  }

  function handleForm(e) {
    e.preventDefault();
    console.log(e.target.subject.value);
  }
  return (
    <div className="recomnde">
      <Subject Icon={at} text="הגש הצעה" />
      <form id="myform" onSubmit={handleForm}>
        <div className="recomend__info">
          <div className="reomnde__SecindHalf">
            <h4>נושא הצעה לסדר:</h4>
            <input type="text" name="subject" />
            <h4>דברי הסבר:</h4>
            <textarea name="" id="" cols="47" rows="12"></textarea>
            <h4>שאלה: (נכלל בספירת 50 מילים)</h4>
            <input type="text" name="query" />
            <div className="additional-query-div">
              <h4>שאלת המשך: </h4>
              <p>(אופציונלי, תשאל רק במעמד המענה במליאת הכנסת)</p>
            </div>
            <input type="text" name="query-additional" />
          </div>
          <div className="reomnde__FirstHalf">
            <h4>חכ"ים רלוונטיים: </h4>
            <Multiselect
              style={{
                multiselectContainer: {
                  width: "70%",
                  border: "5px solid black",
                  "border-radius": "15px",
                },
                inputField: {
                  margin: "5px",
                },
                optionContainer: {
                  // To change css for option container
                  width: "100%",
                  "text-align": "right",
                },
                searchBox: {
                  // To change search box element look
                  "text-align": "right",
                  color: "#000",
                  border: "0px",
                },
                option: {
                  // To change css for dropdown options

                  "font-size": "12px",
                },
                "option:hover": {
                  // To change css for dropdown options
                  "background-color": "grey",
                  "font-size": "12px",
                },
              }}
              options={options} // Options to display in the dropdown
              selectedValues={dummy} // Preselected value to persist in dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={dummy} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
              placeholder="בחר חבר כנסת"
            />
            <br />
            <div class="attach-title-div">
              <img src={AttachIcon}></img>
              <h4>קבצים ומסמכים תומכים </h4>
            </div>
            <div className="attachments-div">
              <div className="attachments-list">
                <div class="attachment">
                  <img src={AttachmentsIcon}></img>
                  <p>פרוטוקול אסיפה כללית 9.9.13</p>
                  <img src={PeopleIcon}></img>
                </div>
                <div class="attachment">
                  <img src={AttachmentsIcon}></img>
                  <p>פרוטוקול אסיפה כללית 9.9.13</p>
                  <img src={PeopleIcon}></img>
                </div>
                <div class="attachment">
                  <img src={AttachmentsIcon}></img>
                  <p>פרוטוקול אסיפה כללית 9.9.13</p>
                  <img src={PeopleIcon}></img>
                </div>
              </div>
              <div className="attach-button-div">
                <button className="btn" type="submit">
                  הוסף קובץ
                </button>
              </div>
            </div>

            <button className="btn" type="submit">
              שלח
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegularQueryForm;
