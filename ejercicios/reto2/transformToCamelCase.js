// Este es el reto del curso de nodejs de la escuela de javascript
//este servicio debe recibir una cadena y convertirla a CamelCase
const { Transform } = require("stream");

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        let cadena;
        cadena = chunk.toString().toLowerCase();

        let cadenaCC = cadena.split(' ').map(function(word,index){
            if(index == 0){
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }).join('');
        this.push(cadenaCC.toString())
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);