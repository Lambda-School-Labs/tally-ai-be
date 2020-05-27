// OLD CODE FROM PREVIOUS GROUP

// const jwt = require('jsonwebtoken');
// const secrets = require('../database/secrets');

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;
//   const secret = secrets.jwtSecret;

//   if (token) {
//     jwt.verify(token, secret, (err, decodedToken) => {
//       if(err) {
//         res.status(401).json('Unauthorized')
//       } else {
//         req.decodedJwt = decodedToken;
//         next();
//       }
//     });
//   } else {
//     res.status(401).json({ message: "Credentials required"});
//   }
// };

module.exports = (req, res, next) => {
  if (!req.session.email) {
    res.send('You are not authorized')
  } else {
    next()
  }
}
