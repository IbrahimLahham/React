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

exports.getToolByType = async (req, res) => {
  var futur =[];
  var history =[];
  try {
    const {toolType} = req.body;
    const parliamentaryTool = await Tool.findOne({ type: toolType});
    //this code is Temporary**************
    if(parliamentaryTool.type == "כינוס הכנסת"){futur = thirdToolFuture; history = thirdToolHistory}
    if(parliamentaryTool.type == "נאום בן דקה"){futur = secondToolFuture; history = secondToolHistory}
    if(parliamentaryTool.type == "שאילתא"){futur = firstToolFuture; history = firstToolHistory}
    //**************
    res.send({ parliamentaryTool: parliamentaryTool,futur: futur,history: history, success: true });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message:
        "getting the parliamentary Tools from the DB Failed! try again" + error,
    });
  }
};
//mooc data for futur and history********
const firstToolFuture =["22.8.19 מענה לשאילתות: שר התחבורה, שר המשפטים"];
const firstToolHistory =["17.8.19 מענה לשאילתות: שרת התרבות","12.8.19 מענה לשאילתות: שר הבריאות","8.8.19 מענה לשאילתות: שרת האוצר"];
const secondToolFuture = ["22.8.19 ישיבת המליאה: נאומים בני דקה"];
const secondToolHistory =["17.8.19 ישיבת המליאה: נאומים בני דקה","12.8.19 ישיבת המליאה: נאומים בני דקה","8.8.19 ישיבת המליאה: נאומים בני דקה"];
const thirdToolFuture =['22.8.19 הצעה לסדר היום בנושא: "תקצוב עמותות העוסקות בהנגשת מידע פרלמנטרי"'];
const thirdToolHistory =['15.7.19 הצעה לסדר היום בנושא: "הכישלון הלאומי המתמשך בקליטות יהודי אתיופיה"','10.7.19 הצעה לסדר היום בנושא: "הצורך הדחוף לבחון את המחדלים......'];