//Servidor Express que recibe un año y contesta si es bisiesto o no 

const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res) {
    res.send("hello world desde reto 3");
})
app.get("/bisiesto/:id", function(req, res) {
    //recibimos año y verificamos si es bisiesto 
    let anio = req.params.id;
    if (((anio % 4 == 0) && (anio % 100 != 0 )) || (anio % 400 == 0)){
        res.send( anio + ' Es bisiesto. ');
    }
    else {
        res.send( anio + ' Este año no es bisiesto. ');
    }
  });

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);
});