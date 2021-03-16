const jwt = require('jsonwebtoken');
const user = require("../schema/user");

module.exports = function ( req, res, next) {
 
    const authcookie = req.cookies.cookie;
    console.log(req.cookies);
    try {
        jwt.verify(authcookie, process.env.TOKEN_SECRET, (err, data) => {
          if (err) {
            console.log(err);
            res.send(err);
          }
          else {
            user.findOne({email:data.email}).then(function(userToFind) {
              if((userToFind)&&(userToFind.active)){
                console.log(data.email);
                req.body.email = data.email;
                req.body.firstName = data.firstName;
                req.body.lastName = data.lastName;
                next();
                }else{
                  res.send({
                    ok: false,
                    message: "Invalid User"
                  });
                }
            });
      
          }
        })
      }
      catch(e){
        res.send(e);
      }
};