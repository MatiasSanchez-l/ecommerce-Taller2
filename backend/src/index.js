const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use("/usuarios", require("./routes/usuarios"));
app.use("/producto", require("./routes/productos"));
app.use((err, req, res) => {
  console.log(err.message)
});

puerto = process.env.PORT || 5005;
app.listen(puerto, () => {
  console.log(`Escuchando el puerto ${puerto}`);
});