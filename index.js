const express = require('express');
const app = express()
app.use(express.static(__dirname + '/public/'))
app.listen('https://cakefn.netlify.app/', function () {
    console.log('Servidor web inbiciado');
  })