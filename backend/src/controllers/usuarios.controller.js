const path = require("path");
const AWS = require("aws-sdk");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const request = require("request");
const jwkToPem = require("jwk-to-pem");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });
global.fetch = require("node-fetch");

//string?
const poolData = {
  region: process.env.AWS_DEFAULT_REGION,
  UserPoolId: process.env.AWS_USER_POOL_ID,
  ClientId: process.env.AWS_CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const registrarUsuario = (req, res) => {
  try {
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var direccion = req.body.direccion;
    var contrasenia = req.body.contrasenia;

    var listaAtributos = [];
    listaAtributos.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "name",
        Value: nombre,
      })
    );
    listaAtributos.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "family_name",
        Value: apellido,
      })
    );
    listaAtributos.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );
    listaAtributos.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "address",
        Value: direccion,
      })
    );

    userPool.signUp(
      email,
      contrasenia,
      listaAtributos,
      null,
      function (err, result) {
        try {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ error: "Algo salio mal.", mensaje: err.message });
            return;
          }

          res.sendStatus(201);
          return;
        } catch (error) {
          console.log(error);
          res.status(500).json({ erro: "Algo salio maaaaaal." });
          return;
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Algo salio mal." });
  }
};

const loguearUsuario = (req, res) => {
  const email = req.body.email;
  const contrasenia = req.body.contrasenia;

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Email: email,
    Password: contrasenia,
  });

  var datosUsuarios = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(datosUsuarios);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      var accessToken = result.getAccessToken().getJwtToken();
      var idToken = result.getIdToken().getJwtToken();
      var refreshToken = result.getRefreshToken().getToken();

      res.status(200).json({
        accessToken: accessToken,
        idToken: idToken,
        refreshToken: refreshToken,
      });
    },
    onFailure: function (err) {
      res.status(500).json({ error: "Algo salio mal.", mensaje: err });
    },
  });
};

const desloguearUsuario = (req, res) => {
  var { email } = req;
  
  const accessToken = req.header("accessToken");
  const idToken = req.header("idToken");
  const refreshToken = req.header("refreshToken");

  const nuevoAccessToken = new AmazonCognitoIdentity.CognitoAccessToken({
    AccessToken: accessToken,
  });
  const nuevoIdToken = new AmazonCognitoIdentity.CognitoIdToken({
    IdToken: idToken,
  });
  const nuevoRefreshToken = new AmazonCognitoIdentity.CognitoRefreshToken({
    RefreshToken: refreshToken,
  });

  const datosSession = {
    IdToken: nuevoIdToken,
    AccessToken: nuevoAccessToken,
    RefreshToken: nuevoRefreshToken,
  };

  const userSession = new AmazonCognitoIdentity.CognitoUserSession(
    datosSession
  );

  var datosUsuario = {
    Username: email,
    Pool: userPool,
  };

  var usuarioCognito = new AmazonCognitoIdentity.CognitoUser(datosUsuario);

  usuarioCognito.setSignInUserSession(userSession);

  usuarioCognito.getSession(function (err, session) {
    if (session.isValid()) {
      usuarioCognito.globalSignOut({
        onFailure: (e) => {
          res.status(400).json({
            mensaje: e.message,
          });
        },
        onSuccess: (r) => {
          res.status(200).json({
            mensaje: "Se cerro la sesion correctamente",
          });
        },
      });
    } else {
      res.status(400).json({
        mensaje: "Error. Sesion invalida",
      });
    }
  });
};

module.exports = {
  registrarUsuario,
  loguearUsuario,
  desloguearUsuario,
};
