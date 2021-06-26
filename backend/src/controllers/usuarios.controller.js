const path = require('path');
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
require('dotenv').config({ path: path.join(__dirname, "../../.env") });
global.fetch = require('node-fetch');

//string?
const poolData={
    region: process.env.AWS_DEFAULT_REGION,
    UserPoolId: process.env.AWS_USER_POOL_ID,
    ClientId: process.env.AWS_CLIENT_ID
}

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const registrarUsuario = (req, res) => {
    try {
        var nombre = req.body.nombre;
        var apellido = req.body.apellido;
        var email = req.body.email;
        var direccion = req.body.direccion;
        var contrasenia = req.body.contrasenia;
        
        var listaAtributos = [];
        listaAtributos.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name", Value:nombre}));
        listaAtributos.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name", Value:apellido}));
        listaAtributos.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email", Value:email}));
        listaAtributos.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address", Value:direccion}));
        
        userPool.signUp(email, contrasenia, listaAtributos, null, function(err, result){
            try {
                if(err){
                    console.log(err);
                    res.status(500).json({error: 'Algo salio mal.', mensaje: err.message});
                    return;
                }
    
                res.sendStatus(201);
                return;
            } catch (error) {
                console.log(error);
                res.status(500).json({erro: 'Algo salio maaaaaal.'});
                return;
            }
            
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({erro: 'Algo salio mal.'});
    }
    
};

module.exports = {
    registrarUsuario
};