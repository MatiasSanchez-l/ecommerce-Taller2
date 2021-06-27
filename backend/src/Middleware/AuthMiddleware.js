const path = require("path");
const AWS = require("aws-sdk");
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
const { jwk } = require('../helper/jwk');
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

exports.Validar = function(req, res, next){
  try {
      const pem = jwkToPem(jwk.keys[1]);
      const token = req.header('accessToken');
      
      if(!token){
        return res.sendStatus(401);
      }

      jwt.verify(token, pem, (err, decoded) =>{
          if(err){
              return res.sendStatus(401);
          }else{
            const parametros = {AccessToken: token};
            var cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
            cognitoIdentityServiceProvider.getUser(parametros, (err, data) => {
                if(err){
                    return res.sendStatus(401);
                }else{
                    req.email = decoded.username;
                    next();
                }
            });
          }
      })
  } catch (error) {
    return res.status(500).json({mensaje: "algo salio mal " ,
    error: error.message});
  } 
};