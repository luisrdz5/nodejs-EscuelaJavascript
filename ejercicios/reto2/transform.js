// Este es el desarrollo de un servidor que cambia una cadena amayusculas utilizando Transform Streams
const { Transform } = require("stream");

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);