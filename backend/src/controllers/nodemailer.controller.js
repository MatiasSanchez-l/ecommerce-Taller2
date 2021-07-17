const nodemailer = require("nodemailer");
const nodemailerCtrl = {};

nodemailerCtrl.contacto = async (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const telefono = req.body.telefono;
  const consulta = req.body.consulta;
  console.log("entramos a nodemailer");
  if (!nombre || !apellido || !email || !consulta) {
    res.status(401).json({
      status: "errorCampos",
      text: "Por favor complete todos los campos para enviar la consulta",
    });
  } else {
    try {
      
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: 'fagliano.santi@gmail.com',
          pass: 'jpnjqptkxrljabzm',
        },
      });
      try {
        console.log("entramos a nodemailer");
        await transporter.sendMail({
          from: '"Ecommerce" <adminpaginataller@yopmail.com>', // sender address
          to: "adminpaginataller@yopmail.com", // list of receivers
          subject: "Consulta Web - Ecommerce", // Subject line
          html:
            '<!doctype html><html lang="es"><head>    <meta charset="utf-8">    <meta name="viewport" content="width=device-width, initial-scale=1">    <title>Hello, world!</title></head><body>    <header>       <h1>#Ecommerce</h1>    </header>    <main class="container mt-2">        <h3 class="text-center">Alguien ha hecho una consulta</h3>        <hr class="hr">        <h4>Datos:</h4> <span><b>Nombre: </b> "' +
            req.body.nombre +
            '"</span><br> <span> <b>Apellido:            </b>"' +
            req.body.apellido +
            '"</span><br> <span><b>Email: </b>"' +
            req.body.email +
            '"</span><br> <span><b>Telefono:            </b>"' +
            req.body.telefono +
            '"</span><br> <span><b>Consulta: </b>"' +
            req.body.consulta +
            '"</span>    </main>    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"        integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"        crossorigin="anonymous"></script>    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"        integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"        crossorigin="anonymous"></script></body></html>',
        });
        res.status(200).json({
          status: "success",
        });
      } catch (err) {
        res.status(401).json({
          status: "error" + err,
        });
      }
    } catch (e) {
      console.error(e.message);
      res.status(500).send(e);
    }
  }
};

module.exports = nodemailerCtrl;
