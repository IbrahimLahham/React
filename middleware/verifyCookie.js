const jwt = require('jsonwebtoken');

module.exports = function ( req, res, next) {
 
    const authcookie = req.cookies.Cookie;
    console.log(req.cookies);
    try {
        jwt.verify(authcookie, process.env.TOKEN_SECRET, (err, data) => {
          if (err) {
            console.log(err);
            res.send(err);
          }
          else {
            console.log(data.email);
            req.body.email = data.email;
            next();
          }
        })
      }
      catch(e){
        res.send(e);
      }
};