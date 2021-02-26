import "./parliamentaryTool.css";
import React, { useState, useEffect } from "react";

//components
import Cards from "../../components/Cards.js";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

const datas = [
  {
    title: "שאילה רגילה",
    content:
      "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים .",
  },
  {
    title: "נאום בן דקה",
    content:
      "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)",
  },
  {
    title: "כינוס הכנסת בזמן הפגרה",
    content:
      "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום",
  },
];
let currentTabName = "כלים פרלמנטריים";
let userType = "לוח מעקב";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(datas);
  }, []);

  return (
    <div className="App">
      <Header />
      <Cards tools={data} />
      <Footer />
    </div>
  );
}

export default App;
