const path = require("path");
const AWS = require("aws-sdk");
const { json } = require("body-parser");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "productos";

const getProductos = async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
    };
    const productos = await dynamoClient.scan(params).promise();
    res.status(200).json(productos.Items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Algo salio mal." });
  }
};

const getProductoPorId = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: idProducto,
      },
    };
    let response = await dynamoClient.get(params).promise();
    return res.status(200).json(response.Item);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Algo salio mal." });
  }
};

const crearProducto = async (req, res) => {
  try {
    req.body.id = uuidv4();
    const params = {
      TableName: TABLE_NAME,
      Item: req.body,
    };
    await dynamoClient.put(params).promise();
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Algo salio mal." });
  }
};

const modificarProducto = async (req, res) => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Item: req.body,
    };
    await dynamoClient.put(params).promise();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Algo salio mal." });
  }
};

const borrarProducto = async (req, res) => {
  try {
    const idProducto = req.params.id;
    const params = {
      TableName: TABLE_NAME,
      Key: {
        id: idProducto,
      },
    };

    await dynamoClient.delete(params).promise();

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Algo salio mal." });
  }
};

module.exports = {
  dynamoClient,
  getProductos,
  getProductoPorId,
  crearProducto,
  modificarProducto,
  borrarProducto,
};
