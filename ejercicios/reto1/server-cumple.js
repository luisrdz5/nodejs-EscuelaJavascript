
//En este reto se va a crear un servidor en el que reciba 
//por metodo post una fecha de cumpleaños y debera rergresar
// el dia de la semana de tal dia 

const http = require("http");
const server = http.createServer();
const dias=["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

server.on("request", (req, res)  => {
    if(req.method === "POST" && req.url == "/cumple"){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })
        .on('end', () => {
            res.writeHead(200, {"Content-Type": "'text/plain"})
            body = Buffer.concat(body).toString();
            let dia= body.substring(0,2);
            let mes= body.substring(2,4);
            let anio= body.substring(4,8);
            try {
                let fecha = new Date(mes+' '+dia+', '+anio+' 12:00:00');
                res.write(dias[fecha.getDay()].toString())
            }
            catch(err ) {
                res.write('no fue una fecha valida!, favor de corregir')
            }
            res.end('\n se termino el proceso');
        })
    }else {
        res.statusCode= 404;
        res.end();
    }
});

server.listen(8000);
console.log("servidor creado en la URL http://localhost:8000");
