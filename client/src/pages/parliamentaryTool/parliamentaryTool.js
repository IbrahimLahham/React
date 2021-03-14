import "./parliamentaryTool.css";
import React, { useState, useEffect } from "react";

//components
import Cards from "../../components/Cards.js";

// const datas = [
//   {
//     title: "שאילה רגילה",
//     content:
//       "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים .",
//     link: "normalquery",
//   },
//   {
//     title: "נאום בן דקה",
//     content:
//       "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)",
//     link: "oneMinuteSpeech",
//   },
//   {
//     title: "כינוס הכנסת בזמן הפגרה",
//     content:
//       "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום",
//     link: "kenosKnesset",
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(datas);
  // }, []);

  useEffect(() => {
    fetch("parliamentaryTools/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.parliamentaryTools.map((tool, index) => {
          console.log("Tool: ", tool);
        });
        setData(data.parliamentaryTools);
      });
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <Cards tools={data} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
