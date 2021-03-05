import React from "react";
import "./KennosForm.css";
import Subject from "./Subject";
import at from "./Images/at.PNG";
import { Multiselect } from 'multiselect-react-dropdown';

function KennosForm() {
  const options = [{ name: 'גפני משה', id: 1 }, { name: 'גרמל יעל', id: 2 }, { name: 'דיין עוזי', id: 1 }, { name: 'דיכנטר אבי', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }, { name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }];
  function dummy() {
    console.log("hehe");
  }

  function onSelect(selectedList, selectedItem) {
    console.log('select invoked: ', selectedList);
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
          <input type="text" name="subject"/>
          <h4>דברי הסבר:</h4>
          <textarea name="" id="" cols="47" rows="12"></textarea>
        </div>
        <div className="reomnde__FirstHalf">
          <h4>חכ"ים רלוונטיים: </h4>
          {/* <select className="select">
            <option>גפני משה</option>
            <option>גרמל יעל</option>
            <option>דיין עוזי</option>
            <option>דיכנטר אבי</option>
          </select> */}
          <Multiselect style={{
            multiselectContainer: {
              width: '300px'
            },
            inputField: {
              'margin': '5px',
            },
            optionContainer: { // To change css for option container 
              width: '300px',
              'text-align': 'right',
            },
            searchBox: { // To change search box element look
              'text-align': 'right',
              'color': '#000'
            },
            option: { // To change css for dropdown options

              'font-size': '12px'
            },
            'option:hover': { // To change css for dropdown options
              'background-color': 'grey',
              'font-size': '12px'
            }
          }}
            options={options} // Options to display in the dropdown
            selectedValues={dummy} // Preselected value to persist in dropdown
            onSelect={onSelect} // Function will trigger on select event
            onRemove={dummy} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            placeholder="בחר חבר כנסת"
          />
          <br />
          <button className="btn" type="submit">שלח</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default KennosForm;
