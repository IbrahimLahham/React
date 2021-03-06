import React from "react";
import "./kenosKnesset.css";
import Naom from "../../components/Naom";
import Taknon from "../../components/Taknon";
import Time from "../../components/Time";
import Recomend from "../../components/Recomend";
import RulesCard from "../../components/RulesCard"

function kenosKnesset() {
  return (
    <div>
      <div className="container">
        <div className="up">
          <Naom />
          <Taknon />
        </div>
        <div className="down">
          <Time data={timeFutreData} text="עתיד" />
          <Time data={timeHistoryData} text="היסטוריה" />
        </div>
        <Recomend />
      </div>
    </div>
    // <div>
    //   <RulesCard></RulesCard>
    // </div>
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
export default kenosKnesset;
