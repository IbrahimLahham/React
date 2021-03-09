const jwt = require('jsonwebtoken');

module.exports = function ( req, res, next) {

    const authcookie = req.cookies.cookie;
    
    try {
        jwt.verify(authcookie, process.env,TOKEN_SECRET, (err, data) => {
          if (err) {
            console.log(err);
            res.send(err);
          }
          else {
            console.log(data);
            res.send(data);
          }
        })
      }
      catch(e){
        res.send(e);
      }
};