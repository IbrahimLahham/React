import React from "react";
import "./CurrentCard.css";
function CurrentCard(props) {
  if (props.tool === undefined) {
    return <>Still loading...</>;
  }
  return (
    <div className="current-card">
      <h2>{props.tool.title}</h2>
      <p>{props.tool.subTitle}</p>
    </div>
  );
}

export default CurrentCard;
