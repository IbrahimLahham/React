import React from "react";
import "./kenosKnesset.css";
import KennosForm from "../../components/KennosForm";
import TopCards from "../../components/TopCards";

function kenosKnesset() {
  return (
    <div>
      <div className="container">
        <TopCards toolType={"4"} />
        <KennosForm />
      </div>
    </div>
  );
}

export default kenosKnesset;
