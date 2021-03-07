import React from "react";
import "./oneMinuteSpeech.css";
import OneMinuteForm from "../../components/OneMinuteForm";
import TopCards from "../../components/TopCards";

//import './normalquery.css'

const oneMinuteSpeech = () => {
  // const [book, setbook] = useState([]);

  return (
    <div>
      <div className="container">
        <TopCards toolType={"4"} />
        <OneMinuteForm />
      </div>
    </div>
  );
};

export default oneMinuteSpeech;
