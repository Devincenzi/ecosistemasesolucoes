// import  from 'nodemailer';

export default function(req, res){
// var http = require('http');
// const express = require('express');
// const app = express();

// app.get('/api/contact', (req, res) => {

    let nodemailer = require('nodemailer');

    const { nome, email, assunto, mensagem } = req.body;

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "mail.ecosistemasesolucoes.com.br",
        auth: {
            user: 'comercial@ecosistemasesolucoes.com.br',
            pass: 'Eco@2212963',
        },
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailData = {
        from: `${email}`,
        to: "comercial@ecosistemasesolucoes.com.br",
        subject: `${assunto}`,
        text: `${mensagem} ${' '} - ${nome}`,
        html: `<div>${mensagem}</div>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            res.status(500).json({erro: err});
        else
            res.status(200).json({paramone: nome});
    });

    transporter.close();
};