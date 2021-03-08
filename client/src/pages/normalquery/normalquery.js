import React from "react";
import "./normalquery.css";
import RegularQueryForm from "../../components/RegularQueryForm";
import TopCards from "../../components/TopCards";

//import './normalquery.css'

const normalquery = () => {
  // const [book, setbook] = useState([]);

  return (
    <div>
      <div className="container">
        <TopCards toolType={"4"} />
        <RegularQueryForm />
      </div>
    </div>
  );
};

export default normalquery;
