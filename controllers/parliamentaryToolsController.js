// handlers

let tempParliamentaryTools = [
  { type: "", title: "", subTitle: "", term: "", language: "" },
  { type: "", title: "", subTitle: "", term: "", language: "" },
  { type: "", title: "", subTitle: "", term: "", language: "" },

];
exports.getAllParliamentaryTools = async (req, res) => {
  res.send({ parliamentaryTools: [], success: true });
};
