// Este es el reto del curso de nodejs de la escuela de javascript
//este servicio debe recibir una cadena y convertirla a CamelCase
const { Transform } = require("stream");

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        let cadena;
        cadena = chunk.toString().toLowerCase();

        let cadenaCC = cadena.split(' ').map(function(word,index){
            // If it is the first word make sure to lowercase all the chars.
            if(index == 0){
              return word.toLowerCase();
            }
            // If it is not the first word only upper case the first char and lowercase the rest.
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }).join('');
        this.push(cadenaCC.toString())
        callback();
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);