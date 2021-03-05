// handlers

let tempParliamentaryTools = [
  {
    type: "כינוס הכנסת בזמן הפגרה",
    title: "כינוס הכנסת בזמן הפגרה ",
    subTitle:
      " כינוס הכנסת בזמן הפגרה כינוס הכנסת בזמן הפגרהכינוס הכנסת בזמן הפגרה כינוס ",
    term: "",
    language: "heb",
  },
  {
    type: "שאילתה רגילה",
    title: "שאילתה רגילה ",
    subTitle:
      "שאילתה רגילהשאילתה רגילהשאילתה רגילהשאילתה רגילהשאילתה רגילהשאילתה רגילה",
    term: "",
    language: "heb",
  },
  {
    type: "נאום בן דקה",
    title: "נאום בן דקה",
    subTitle: "נאום בן דקה נאום בן דקה נאום בן דקהנאום בן דקהנאום בן דקה",
    term: "",
    language: "heb",
  },
];
exports.getAllParliamentaryTools = async (req, res) => {
  res.send({ parliamentaryTools: tempParliamentaryTools, success: true });
};
