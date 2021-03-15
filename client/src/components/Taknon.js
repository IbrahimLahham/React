import React from "react";
import Subject from "./Subject";
import "./Taknon.css";
import Logo from "./Images/tak_icon.PNG";
function Taknon(props) {
  if (props.tool.tkanon === undefined) {
    return <>Still loading...</>;
  }
  return (
    <div className="taknon scroll">
      <Subject text="תקנון" Icon={Logo} />
      <div className="taknon__data">
        <h5>{props.tool.tkanon.title}</h5>
        <h5>{props.tool.tkanon.tkanonNumber}.</h5>
        {props.tool.tkanon.tkanonDetails.map((section, index) => {
          return (
            <div>
              <h5>{section.sectionTitle}</h5>
              <h5 className="articl">{section.sectionContent}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Taknon;
