import "./parliamentaryTool.css";
import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards.js";

function App() {
  const [data, setData] = useState([]);

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
      <Cards tools={data} />
    </div>
  );
}

export default App;
