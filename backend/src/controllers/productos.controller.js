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
    const params = {
        TableName: TABLE_NAME
    };
    const productos = await dynamoClient.scan(params).promise();
    res.json(productos);
};

const getProductoPorId = async (req, res) =>{
    const idProducto = req.params.id;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: idProducto
        }
    };
    let response= await dynamoClient.get(params).promise();
    res.json(response);
};

const crearOModificarProducto = async(req, res) =>{
    console.log(req);
    const params = {
        TableName: TABLE_NAME,
        Item: req.body
    };
    let response= await dynamoClient.put(params).promise();
    res.json(response);
};

const borrarProducto = async(req, res) =>{
    const idProducto = req.params.id;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: idProducto
        }
    };
    let response= await dynamoClient.delete(params).promise();
    res.json(response);
};

module.exports = {
    dynamoClient,
    getProductos,
    getProductoPorId,
    crearOModificarProducto,
    borrarProducto
};