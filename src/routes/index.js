const express = require('express');
const { sendEmail } = require('../utils/sendEmail');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', (req, res) => {
    const { name, email, phone, message } = req.body

    sendEmail({
        to: "gabrielghioma@gmail.com",
        subject: "MI PRIMER EMAIL",
        html: `
            <div>
                <h1 style="color:red">Tienes un nuevo mensaje </h1>
                <p>Este reclutador, con nombre ${name}, con este  ${email},este telefono: ${phone}, 
                </p>
                <h2 style="font-size: 20px">te ha dejado este mensaje:${message}</h2>            
            </div>`
    })

    res.send({ message: 'email send' }).status(200)
});



module.exports = router;
