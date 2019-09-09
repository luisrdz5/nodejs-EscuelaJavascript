//Este es un servidor http creado para recibir una cadena de texto por post y regresarla como respuesta

const http = require("http");
const server = http.createServer();

server.on("request", (req, res)  => {
    if(req.method === "POST" && req.url == "/echo"){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })
        .on('end', () => {
            res.writeHead(200, {"Content-Type": "'text/plain"})
            body = Buffer.concat(body).toString();
            res.end(body);
        })

    }else {
        res.statusCode= 404;
        res.end();
    }
});

server.listen(8000);
console.log("servidor creado en la URL http://localhost:8000");

