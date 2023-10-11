const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwt");

exports.verifyToken = ()=>jwt.verify(token,jwtConfig.secret);
exports.createToken = ()=>jwt.sign(data,jwtConfig.secret,{expiresIn:jwtConfig.ttl});