const user = require("../schema/user");
const Suggestion = require("../schema/Suggestion");

exports.getAllMembers = async (req, res) => {
    try {
        const userToFind = await user.find({});
        res.send({ users: userToFind });
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};

exports.getBlockedMembers = async (req, res) => {
    try {
        const userToFind = await user.find({ active: false });
        res.send({ users: userToFind });
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};

exports.getActiveMembers = async (req, res) => {
    try {
        const userToFind = await user.find({ active: true });
        res.send({ users: userToFind });
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};

exports.changeStatus = async (req, res) => {
    const { email, active } = req.body;
    try {
        user.updateOne({ email: email }, { active: active }, function (err, result) {
            if (err) {
                console.log("error status!");
                res.send({ ok: false });
            }
            else {
                console.log("status changed!");
                res.send({ ok: true });
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};

exports.checkSpam = async (req, res) => {
    // const { email, active } = req.body;
    try {
        const suggestionToFind = await Suggestion.find({ isSpam: true });
        res.send({ isSpam: suggestionToFind});//[0].status[0].isSpam 
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};
exports.allSuggestions = async (req, res) => {
    // const { email, active } = req.body;
    try {
        const suggestionToFind = await Suggestion.find({ });
        res.send({ isSpam: suggestionToFind});//[0].status[0].isSpam 
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};

exports.notSpam = async (req, res) => {
    // const { email, active } = req.body;
    try {
        const suggestionToFind = await Suggestion.find({ isSpam: false });
        res.send({ isSpam: suggestionToFind});//[0].status[0].isSpam 
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};


exports.changeSpam = async (req, res) => {
    const { _id, isSpam } = req.body;
    try {
        Suggestion.updateOne({ _id: _id }, { isSpam: isSpam }, function (err, result) {
            if (err) {
                console.log("error status!");
                res.send({ ok: false });
            }
            else {
                console.log("status changed!");
                res.send({ ok: true });
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            ok: false,
            message:
                "getting the parliamentary Tools from the DB Failed! try again" + error,
        });
    }
};