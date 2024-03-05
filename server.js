const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Configura nodemailer con tus credenciales de correo
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',  // Ingresa tu dirección de correo electrónico
    pass: ''  // Ingresa tu contraseña
  }
});

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {
  const { fullName, email, phone, company, message } = req.body;

  // Configura el contenido del correo
  const mailOptions = {
    from: '',  // Ingresa tu dirección de correo electrónico
    to: 'aprinzbach@elevo-advisors.com',  // Destinatario del correo
    subject: 'Nuevo mensaje del formulario de contacto',
    html: `
      <p>Nombre: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Teléfono: ${phone}</p>
      <p>Compañía: ${company}</p>
      <p>Mensaje: ${message}</p>
    `
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo electrónico' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).json({ success: true, message: 'Correo electrónico enviado con éxito' });
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
