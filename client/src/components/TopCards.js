import React from "react";
import "./TopCards.css";
import CurrentCard from "./CurrentCard";
import Taknon from "./Taknon";
import Time from "./Time";

function TopCards(props) {
  return (
    <div>
      <div className="up">
          <CurrentCard toolId={props.toolType}/>
          <Taknon />
        </div>
        <div className="down">
          <Time data={timeFutreData} text="עתיד" />
          <Time data={timeHistoryData} text="היסטוריה" />
        </div>
    </div>
  );
}
let timeHistoryData = [
  { date: "17.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
  { date: "12.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
  { date: "08.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
];
let timeFutreData = [
  { date: "22.8.19", first: "ישיבת המליאה", second: "נאומים בני דקה" },
];
export default TopCards;
