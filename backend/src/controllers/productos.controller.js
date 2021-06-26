const path = require('path');
const AWS = require('aws-sdk');
const { stringify } = require('querystring');
require('dotenv').config({ path: path.join(__dirname, "../../.env") });

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "productos";

const getProductos = async (req, res) => {
    try {
        const params = {
            TableName: TABLE_NAME
        };
        const productos = await dynamoClient.scan(params).promise();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).json({erro: 'Algo salio mal.'});
    }
    
};

const getProductoPorId = async (req, res) =>{
    try {
        const idProducto = req.params.id;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: idProducto
        }
    };
    let response= await dynamoClient.get(params).promise();
    res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({erro: 'Algo salio mal.'});
    }
    
};

const crearOModificarProducto = async(req, res) =>{
    try {
    const params = {
        TableName: TABLE_NAME,
        Item: req.body
    };
    let response= await dynamoClient.put(params).promise();
    res.status(201).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({erro: 'Algo salio mal.'});
    }
    
};

const borrarProducto = async(req, res) =>{
    try {
        const idProducto = req.params.id;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: idProducto
        }
    };

    await dynamoClient.delete(params).promise();
    res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).json({erro: 'Algo salio mal.'});
    }
};

module.exports = {
    dynamoClient,
    getProductos,
    getProductoPorId,
    crearOModificarProducto,
    borrarProducto
};