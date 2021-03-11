const Tool = require("../schema/Tool");

exports.getAllParliamentaryTools = async (req, res) => {
  try {
    const parliamentaryTools = await Tool.find({});
    res.send({ parliamentaryTools: parliamentaryTools, success: true });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "getting the parliamentary Tools from the DB Failed! try again" + error,
    });
  }
};

exports.createParliamentaryTool = async (req, res) => {
  let { type, title, subTitle, term, language, redirectTo } = req.body;

  try {
    const toolToAdd = new Tool({
      type: type,
      title: title,
      subTitle: subTitle,
      term: term,
      language: language,
      redirectTo: redirectTo,
    });
    toolToAdd.save().then(() => {
      res.send({
        success: true,
        createdSuggestion: req.body,
        message: "the  parliamentary Tool has been saved in th DB successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "adding the parliamentary Tool to the DB Failed! try again" + error,
    });
  }
};
